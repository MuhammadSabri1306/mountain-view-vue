<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import property36Data from "@/datas/property-36";
import property45Data from "@/datas/property-45";
import Layouts from "@/components/Layouts";
import IframeDynamic from "@/components/IframeDynamic.vue";
import Skeleton from "@/components/Skeleton.vue";
import Overlay from "@/components/Overlay.vue";
import Error404 from "@/views/Error404.vue";

const route = useRoute();
const house = ref(null);

const watcherSrc = () => route.params.houseId;
const watcherCall = houseId => {
    if(houseId == "type-36")
        house.value = property36Data;
    else if(houseId == "type-45")
        house.value = property45Data;
    else
        house.value = null;
};

watch(watcherSrc, watcherCall);
watcherCall( watcherSrc() );

const openPanoragoIsv = ref(false);
const showPanoragoIsv = ref(false);
const openPanoragoOsv = ref(false);
const showPanoragoOsv = ref(false);
</script>
<template>
    <Layouts v-if="house">
        <template #main>
            <div class="mt-5 tw-mb-[200px]">
                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <img class="img-fluid" :src="house.img" alt="">
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <table class="table mb-0">
                                        <tr>
                                            <th>Type</th>
                                            <td>:</td>
                                            <td>{{ house.type }}</td>
                                        </tr>
                                        <tr>
                                            <th>Harga</th>
                                            <td>:</td>
                                            <td>{{ house.price }}</td>
                                        </tr>
                                        <tr>
                                            <th>DP/UM</th>
                                            <td>:</td>
                                            <td>{{ house.priceDp }}</td>
                                        </tr>
                                        <tr>
                                            <th>KPR</th>
                                            <td>:</td>
                                            <td>{{ house.priceKpr }}</td>
                                        </tr>
                                    </table>
                                    <table v-if="!house.plans || house.plans.length < 1" class="table">
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
                                <div v-if="house?.panoragoUrls?.insideView || house?.panoragoUrls?.outsideView">
                                    <h4 class="tw-font-semibold tw-text-xl tw-text-center mb-2">Tampilkan Panorama</h4>
                                    <div>
                                        <table class="table table-bordered">
                                            <tr>
                                                <td v-if="house?.panoragoUrls?.insideView">
                                                    <button type="button" @click="showPanoragoIsv = true"
                                                        class="btn btn-block btn-danger">Bagian Dalam</button>
                                                </td>
                                                <td v-if="house?.panoragoUrls?.outsideView">
                                                    <button type="button" @click="showPanoragoOsv = true"
                                                        class="btn btn-block btn-danger">Bagian Luar</button>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <Overlay v-model:show="showPanoragoIsv">
                                    <div class="tw-w-screen md:tw-w-[60vw]">
                                        <IframeDynamic src="/panorama-viewer/property-36" height="75vh">
                                            <template #loading>
                                                <Skeleton width="100%" height="100%" />
                                            </template>
                                        </IframeDynamic>
                                    </div>
                                </Overlay>
                                <Overlay v-model:show="showPanoragoOsv">
                                    <div class="tw-w-screen md:tw-w-[60vw]">
                                        <IframeDynamic src="/panorama-viewer/street" height="75vh">
                                            <template #loading>
                                                <Skeleton width="100%" height="100%" />
                                            </template>
                                        </IframeDynamic>
                                    </div>
                                </Overlay>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Layouts>
    <Error404 v-else />
</template>