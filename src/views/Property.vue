<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import Layouts from "@/components/Layouts";

const route = useRoute();

const getHouseData = (houseId) => {
    console.log(houseId);
};

getHouseData(route.params.houseId);
</script>
<template>
    <Layouts>
        <template #main>
            <div class="mt-5 tw-mb-[200px]">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <img class="img-fluid" src="/assets/img/slide/3.jpg" alt="">
                        </div>
                        <div class="col-md-6">
                            <table class="table">
                                <tr>
                                    <th>Type</th>
                                    <td>:</td>
                                    <td colspan="2">36/72</td>
                                </tr>
                                <tr>
                                    <th>Harga</th>
                                    <td>:</td>
                                    <td colspan="2">Rp. 156.500.000</td>
                                </tr>
                                <tr>
                                    <th>DP/UM</th>
                                    <td>:</td>
                                    <td colspan="2">Rp. 7.825.000</td>
                                </tr>
                                <tr>
                                    <th>KPR</th>
                                    <td>:</td>
                                    <td colspan="2">Rp. 148.675.000</td>
                                </tr>
                                <tr>
                                    <th class="text-center" colspan="4">Estimasi Angsuran</th>
                                </tr>
                                <tr>
                                    <th class="text-center">5 bulan</th>
                                    <th class="text-center">10 bulan</th>
                                    <th class="text-center">15 bulan</th>
                                    <th class="text-center">20 bulan</th>
                                </tr>
                                <tr>
                                    <td class="text-center">-</td>
                                    <td class="text-center">Rp. 1.604.451</td>
                                    <td class="text-center">Rp. 1.193.641</td>
                                    <td class="text-center">Rp. 994.172</td>
                                </tr>
                            </table>
                            <div class="row mt-5">
                                <div class="col-md-12">
                                    <a href="#" style="background-color: #e96b56; color: white; padding: 10px 30px; border-radius: 5px; cursor: pointer;" target="_blank"s>Lihat Rumah</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Layouts>
</template>