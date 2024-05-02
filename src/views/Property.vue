<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useGappStore } from "@/stores/gapp";
import Layouts from "@/components/Layouts";
import IframeDynamic from "@/components/IframeDynamic.vue";
import IconLoading from "@/components/IconLoading.vue";
import Skeleton from "@/components/Skeleton.vue";

const route = useRoute();
const toHouseId = houseIdNumber => `house${ houseIdNumber }`;
const house = ref(null);

const gappStore = useGappStore();
const isDataLoading = ref(true);
const getHouseData = (houseIdNumber) => {
    if(!houseIdNumber) return;
    const houseId = toHouseId(houseIdNumber);
    isDataLoading.value = true;
    gappStore.fetchHouseData(houseId, () => {

        if(!gappStore.houses[houseId]) {
            house.value = null;
            isDataLoading.value = false;
            return;
        }

        house.value = {
            type: gappStore.houses[houseId].type || "-",
            img: gappStore.houses[houseId].img || null,
            price: gappStore.houses[houseId].price || "-",
            priceDp: gappStore.houses[houseId].price_dp || "-",
            priceKpr: gappStore.houses[houseId].price_kpr || "-",
            plans: gappStore.houses[houseId].plans || [],
            panoragoUrlOut: gappStore.houses[houseId].panorago?.urls?.osv || null,
            panoragoUrlIn: gappStore.houses[houseId].panorago?.urls?.isv || null,
        };
        isDataLoading.value = false;

    });
};

// getHouseData(route.params.houseId);
// update utk host manual
</script>
<template>
    <Layouts>
        <template #main>
            <div class="mt-5 tw-mb-[200px]">
                <div v-if="!isDataLoading && !house">
                    <h5 class="text-center text-muted">Data tidak ditemukan.</h5>
                </div>
                <div v-else>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <Skeleton v-if="isDataLoading" class="tw-w-full tw-aspect-square" />
                                <img v-else-if="house.img" class="img-fluid" :src="house.img" alt="">
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <table class="table mb-0">
                                        <tr>
                                            <th>Type</th>
                                            <td>:</td>
                                            <td v-if="isDataLoading">
                                                <Skeleton height="1.5rem" width="5rem" />
                                            </td>
                                            <td v-else>{{ house.type }}</td>
                                        </tr>
                                        <tr>
                                            <th>Harga</th>
                                            <td>:</td>
                                            <td v-if="isDataLoading">
                                                <Skeleton height="1.5rem" width="14rem" />
                                            </td>
                                            <td v-else>{{ house.price }}</td>
                                        </tr>
                                        <tr>
                                            <th>DP/UM</th>
                                            <td>:</td>
                                            <td v-if="isDataLoading">
                                                <Skeleton height="1.5rem" width="14rem" />
                                            </td>
                                            <td v-else>{{ house.priceDp }}</td>
                                        </tr>
                                        <tr>
                                            <th>KPR</th>
                                            <td>:</td>
                                            <td v-if="isDataLoading">
                                                <Skeleton height="1.5rem" width="14rem" />
                                            </td>
                                            <td v-else>{{ house.priceKpr }}</td>
                                        </tr>
                                    </table>
                                    <table v-if="isDataLoading" class="table">
                                        <tr>
                                            <th class="text-right">Estimasi Angsuran :</th>
                                            <th>
                                                <Skeleton height="1.5rem" width="14rem" />
                                            </th>
                                        </tr>
                                    </table>
                                    <table v-else-if="house.plans.length < 1" class="table">
                                        <tr>
                                            <th class="text-right">Estimasi Angsuran :</th>
                                            <th>-</th>
                                        </tr>
                                    </table>
                                    <table v-else class="table">
                                        <tr>
                                            <th class="text-center" :colspan="house.plans.length">Estimasi Angsuran</th>
                                        </tr>
                                        <tr>
                                            <th v-for="plan in house.plans" class="text-center">
                                                {{ plan.span || '-' }}
                                            </th>
                                        </tr>
                                        <tr>
                                            <td v-for="plan in house.plans" class="text-center">
                                                {{ plan.price }}
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 my-4">
                        <IframeDynamic :src="house?.panoragoUrlOut || null" height="40rem" class="tw-bg-slate-100">
                            <template #loading>
                                <Skeleton height="100%" width="100%" />
                            </template>
                        </IframeDynamic>
                        <IframeDynamic :src="house?.panoragoUrlIn || null" height="40rem" class="tw-bg-slate-100">
                            <template #loading>
                                <Skeleton height="100%" width="100%" />
                            </template>
                        </IframeDynamic>
                    </div>
                </div>
            </div>
        </template>
    </Layouts>
</template>