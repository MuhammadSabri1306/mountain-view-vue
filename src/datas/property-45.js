
/*
 * DATA PROPERTI RUMAH TIPE 36
 */
export default {

    /*
    |--------------------------------------------------------------------------
    | Tipe Rumah : String
    |--------------------------------------------------------------------------
    */
    type: "45/98",

    /*
    |--------------------------------------------------------------------------
    | URL Foto Rumah : String
    |--------------------------------------------------------------------------
    */
    img: "/assets/img/slide/1.jpg",

    /*
    |--------------------------------------------------------------------------
    | Harga Rumah : String
    |--------------------------------------------------------------------------
    */
    price: "Rp. 295.000.000",

    /*
    |--------------------------------------------------------------------------
    | Harga DP/UM : String
    |--------------------------------------------------------------------------
    */
    priceDp: "Rp. 44.250.000",

    /*
    |--------------------------------------------------------------------------
    | Harga KPR : String
    |--------------------------------------------------------------------------
    */
    priceKpr: "Rp. 250.750.000",

    /*
    |--------------------------------------------------------------------------
    | Estimasi Angsuran : Array<{ plan: String, price: String }>
    |--------------------------------------------------------------------------
    | plan  -> Durasi Angsuran
    | price -> Biaya Angsuran
    */
    plans: [
        { span: "5 bulan", price: "Rp. 5.653.133" },
        { span: "10 bulan", price: "Rp. 3.548.133" },
        { span: "15 bulan", price: "Rp. 2.905.879" },
        { span: "20 bulan", price: "Rp. 2.624.015" },
    ],

    /*
    |--------------------------------------------------------------------------
    | Link Panorago : Object<{ insideView: String, outsideView: String }>
    |--------------------------------------------------------------------------
    | insideView  -> Tampilan Dalam
    | outsideView -> Tampilan Luar
    */
    panoragoUrls: {
        insideView: "https://panorago.com/viewer/perumahan-the-mountain-view",
        outsideView: "https://panorago.com/viewer/street-view",
    }
};