import { defineStore } from "pinia";
import axios from "axios";

export const useGappStore = defineStore("gapp", {
    state: () => ({

        houses: {}

    }),
    actions: {

        getEnv() {
            const apiKey = import.meta.env.VITE_GAPI_KEY;
            const sheetId = import.meta.env.VITE_GSHEET_ID;
            return { apiKey, sheetId };
        },

        formatFromValues(responseData) {
            if(!Array.isArray(responseData.values))
                return null;

            const sheetValues = responseData.values;
            // sheetValues[0][y] => Col Headers
            // sheetValues[x][0] => Key
            // sheetValues[x][1] => Name
            // sheetValues[x][2] => Value

            const data = {};
            for(let i=1; i<sheetValues.length; i++) {

                let key = sheetValues[i][0];
                let value = sheetValues[i][2];

                if(key.indexOf(".") < 0) {
                    data[key] = value;
                    continue;
                }
                
                let keys = key.split(".");
                let objCursor = data;
                for(let i = 0; i < keys.length - 1; i++) {
                    if(!objCursor[ keys[i] ])
                        objCursor[ keys[i] ] = {};
                    objCursor = objCursor[ keys[i] ];
                }
                objCursor[keys[keys.length - 1]] = value;

            }

            return data;
        },

        async fetchHouseData(houseId, callback = null) {
            try {
                if(callback && typeof callback != "function")
                    throw Error("gappStore.fetchHouseData args 1 should be function");

                const { apiKey, sheetId } = this.getEnv();
                const url = `https://sheets.googleapis.com/v4/spreadsheets/${ sheetId }/values/house${ houseId }`;
                const params = { key: apiKey };

                const response = await axios.get(url, { params });
                const data = this.formatFromValues(response.data);
                if(!data)
                    console.warn(response.data);
                else
                    this.houses[houseId] = data;

            } catch(err) {
                console.error(err);
            } finally {
                if(typeof callback == "function")
                    callback();
            }
        }

    }
});