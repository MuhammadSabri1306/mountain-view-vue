const assets = {
    indoor: {
        backYard: "/assets/img/house-panorama/house-36-indoor/back-yard.JPG",
        frontYard: "/assets/img/house-panorama/house-36-indoor/front-yard.JPG",
        sittingRoom: {
            step1: "/assets/img/house-panorama/house-36-indoor/sitting-room-1.JPG",
            step2: "/assets/img/house-panorama/house-36-indoor/sitting-room-2.JPG",
            step3: "/assets/img/house-panorama/house-36-indoor/sitting-room-3.JPG",
        },
        bedRoomA: "/assets/img/house-panorama/house-36-indoor/bed-room-a.JPG",
        bedRoomB: "/assets/img/house-panorama/house-36-indoor/bed-room-b.JPG",
        toilet: "/assets/img/house-panorama/house-36-indoor/toilet.JPG",
    }
};

export default {
    default: {
        firstScene: "indoorFrontYard",
        sceneFadeDuration: 1000
    },
    scenes: {
        indoorFrontYard: {
            yaw: -30,
            type: "equirectangular",
            panorama: assets.indoor.frontYard,
            hotSpots: [
                {
                    type: "scene",
                    sceneId: "indoorSittingRoomStep1",
                    text: "Masuk",
                    pitch: 0,
                    yaw: -30,
                },
            ]
        },
        indoorSittingRoomStep1: {
            yaw: 0,
            type: "equirectangular",
            panorama: assets.indoor.sittingRoom.step1,
            hotSpots: [
                {
                    type: "scene",
                    sceneId: "indoorSittingRoomStep2",
                    pitch: -20,
                    yaw: 0,
                    targetYaw: 100,
                },
                {
                    type: "scene",
                    sceneId: "indoorFrontYard",
                    text: "Keluar",
                    pitch: 0,
                    yaw: 150,
                    targetYaw: 180,
                },
            ]
        },
        indoorSittingRoomStep2: {
            yaw: 100,
            type: "equirectangular",
            panorama: assets.indoor.sittingRoom.step2,
            hotSpots: [
                {
                    type: "scene",
                    sceneId: "indoorSittingRoomStep3",
                    pitch: -23,
                    yaw: 81,
                    targetYaw: -45,
                },
                {
                    type: "scene",
                    sceneId: "indoorSittingRoomStep1",
                    pitch: -28,
                    yaw: -80,
                    targetYaw: 147,
                },
                {
                    type: "scene",
                    sceneId: "indoorBedRoomA",
                    text: "Masuk ke Kamar I",
                    pitch: 0,
                    yaw: -163,
                    targetYaw: -148,
                },
                {
                    type: "scene",
                    sceneId: "indoorBedRoomB",
                    text: "Masuk ke Kamar II",
                    pitch: 0,
                    yaw: 163,
                    targetYaw: -175,
                },
            ]
        },
        indoorSittingRoomStep3: {
            yaw: -45,
            type: "equirectangular",
            panorama: assets.indoor.sittingRoom.step3,
            hotSpots: [
                {
                    type: "scene",
                    sceneId: "indoorSittingRoomStep2",
                    pitch: -24,
                    yaw: 85,
                    targetYaw: -118,
                },
                {
                    type: "scene",
                    sceneId: "indoorToilet",
                    text: "Masuk ke Toilet",
                    pitch: 0,
                    yaw: 15,
                    targetYaw: 100,
                },
                {
                    type: "scene",
                    sceneId: "indoorBackYard",
                    text: "Lihat Halaman Belakang",
                    pitch: 0,
                    yaw: -64,
                    targetYaw: 58,
                },
            ]
        },
        indoorBedRoomA: {
            yaw: -148,
            type: "equirectangular",
            panorama: assets.indoor.bedRoomA,
            hotSpots: [
                {
                    type: "scene",
                    sceneId: "indoorSittingRoomStep2",
                    text: "Keluar dari Kamar I",
                    pitch: 0,
                    yaw: 22,
                    targetYaw: 20,
                },
            ]
        },
        indoorBedRoomB: {
            yaw: -175,
            type: "equirectangular",
            panorama: assets.indoor.bedRoomB,
            hotSpots: [
                {
                    type: "scene",
                    sceneId: "indoorSittingRoomStep2",
                    text: "Keluar dari Kamar II",
                    pitch: 0,
                    yaw: 5,
                    targetYaw: 20,
                },
            ]
        },
        indoorToilet: {
            yaw: 100,
            type: "equirectangular",
            panorama: assets.indoor.toilet,
            hotSpots: [
                {
                    type: "scene",
                    sceneId: "indoorSittingRoomStep3",
                    text: "Keluar dari Toilet",
                    pitch: 0,
                    yaw: -100,
                    targetYaw: -165,
                },
            ]
        },
        indoorBackYard: {
            yaw: 58,
            type: "equirectangular",
            panorama: assets.indoor.backYard,
            hotSpots: [
                {
                    type: "scene",
                    sceneId: "indoorSittingRoomStep3",
                    text: "Masuk",
                    pitch: 0,
                    yaw: -58,
                    targetYaw: 85,
                },
            ]
        },
    }
};