
/*
 * DATA PROPERTI RUMAH TIPE 36
 */
export default {

    /*
    |--------------------------------------------------------------------------
    | Tipe Rumah : String
    |--------------------------------------------------------------------------
    */
    type: "36/72",

    /*
    |--------------------------------------------------------------------------
    | URL Foto Rumah : String
    |--------------------------------------------------------------------------
    */
    img: "/assets/img/slide/3.jpg",

    /*
    |--------------------------------------------------------------------------
    | Harga Rumah : String
    |--------------------------------------------------------------------------
    */
    price: "Rp. 156.500.000",

    /*
    |--------------------------------------------------------------------------
    | Harga DP/UM : String
    |--------------------------------------------------------------------------
    */
    priceDp: "Rp. 7.825.000",

    /*
    |--------------------------------------------------------------------------
    | Harga KPR : String
    |--------------------------------------------------------------------------
    */
    priceKpr: "Rp. 148.675.000",

    /*
    |--------------------------------------------------------------------------
    | Estimasi Angsuran : Array<{ plan: String, price: String }>
    |--------------------------------------------------------------------------
    | plan  -> Durasi Angsuran
    | price -> Biaya Angsuran
    */
    plans: [
        { span: "5 bulan", price: "-" },
        { span: "10 bulan", price: "Rp. 1.604.451" },
        { span: "15 bulan", price: "Rp. 1.193.641" },
        { span: "20 bulan", price: "Rp. 994.172" },
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