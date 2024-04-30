<script setup>
import Layouts from "@/components/Layouts";
</script>
<template>
    <Layouts>
        <template #main>

            <section id="featured" class="featured mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 mt-4 mt-lg-0">
                            <div class="icon-box text-center">
                                <i class="icofont-phone"></i>
                                <h3>Kontak Kami</h3>
                                <table class="table-contact mt-5">
                                    <tr>
                                        <th>Nomor Telepon</th>
                                        <td>:</td>
                                        <td>+6282195025427s</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>:</td>
                                        <td>imawansawaty18@mhs.akba.ac.id</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </template>
    </Layouts>
</template>
<style scoped>

.table-contact {
    @apply tw-w-full;
}

.table-contact th,
.table-contact td {
    @apply tw-h-[50px];
}

</style>