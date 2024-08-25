import { toRotatedYaw } from "@/helpers/panorama";

export const assets = {
    backYard: "/assets/img/panorama/property-36/back-yard.JPG",
    frontYard: "/assets/img/panorama/property-36/front-yard.JPG",
    sittingRoom: {
        step1: "/assets/img/panorama/property-36/sitting-room-1.JPG",
        step2: "/assets/img/panorama/property-36/sitting-room-2.JPG",
        step3: "/assets/img/panorama/property-36/sitting-room-3.JPG",
    },
    bedRoomA: "/assets/img/panorama/property-36/bed-room-a.JPG",
    bedRoomB: "/assets/img/panorama/property-36/bed-room-b.JPG",
    toilet: "/assets/img/panorama/property-36/toilet.JPG",
};

const scenes = {
    frontYard: {
        yaw: -30,
        type: "equirectangular",
        panorama: assets.frontYard,
    },
    sittingRoomStep1: {
        yaw: 0,
        type: "equirectangular",
        panorama: assets.sittingRoom.step1,
    },
    sittingRoomStep2: {
        yaw: 100,
        type: "equirectangular",
        panorama: assets.sittingRoom.step2,
    },
    sittingRoomStep3: {
        yaw: -45,
        type: "equirectangular",
        panorama: assets.sittingRoom.step3,
    },
    backYard: {
        yaw: 58,
        type: "equirectangular",
        panorama: assets.backYard,
    },
    bedRoomA: {
        yaw: -148,
        type: "equirectangular",
        panorama: assets.bedRoomA,
    },
    bedRoomB: {
        yaw: -175,
        type: "equirectangular",
        panorama: assets.bedRoomB,
    },
    toilet: {
        yaw: 100,
        type: "equirectangular",
        panorama: assets.toilet,
    },
};

scenes.frontYard.hotSpotsItems = {
    sittingRoomStep1: {
        type: "scene",
        sceneId: "sittingRoomStep1",
        text: "Masuk",
        pitch: 0,
        yaw: scenes.frontYard.yaw,
        targetYaw: scenes.sittingRoomStep1.yaw
    },
};

scenes.sittingRoomStep1.hotSpotsItems = {
    frontYard: {
        type: "scene",
        sceneId: "frontYard",
        text: "Keluar",
        pitch: 0,
        yaw: 150,
        targetYaw: toRotatedYaw(scenes.frontYard.hotSpotsItems.sittingRoomStep1.yaw, 180)
    },
    sittingRoomStep2: {
        type: "scene",
        sceneId: "sittingRoomStep2",
        pitch: -20,
        yaw: 0,
        targetYaw: scenes.sittingRoomStep2.yaw,
    },
};

scenes.sittingRoomStep2.hotSpotsItems = {
    sittingRoomStep1: {
        type: "scene",
        sceneId: "sittingRoomStep1",
        pitch: -28,
        yaw: -80,
        targetYaw: toRotatedYaw(scenes.sittingRoomStep1.hotSpotsItems.sittingRoomStep2.yaw, 180),
    },
    sittingRoomStep3: {
        type: "scene",
        sceneId: "sittingRoomStep3",
        pitch: -23,
        yaw: 81,
        targetYaw: scenes.sittingRoomStep3.yaw,
    },
    bedRoomA: {
        type: "scene",
        sceneId: "bedRoomA",
        text: "Masuk ke Kamar I",
        pitch: 0,
        yaw: -163,
        targetYaw: scenes.bedRoomA.yaw,
    },
    bedRoomB: {
        type: "scene",
        sceneId: "bedRoomB",
        text: "Masuk ke Kamar II",
        pitch: 0,
        yaw: 163,
        targetYaw: scenes.bedRoomB.yaw,
    },
};

scenes.sittingRoomStep3.hotSpotsItems = {
    sittingRoomStep2: {
        type: "scene",
        sceneId: "sittingRoomStep2",
        pitch: -24,
        yaw: 85,
        targetYaw: toRotatedYaw(scenes.sittingRoomStep2.hotSpotsItems.sittingRoomStep3.yaw, 180),
    },
    backYard: {
        type: "scene",
        sceneId: "backYard",
        text: "Lihat Halaman Belakang",
        pitch: 0,
        yaw: -64,
        targetYaw: scenes.backYard.yaw,
    },
    toilet: {
        type: "scene",
        sceneId: "toilet",
        text: "Masuk ke Toilet",
        pitch: 0,
        yaw: 15,
        targetYaw: scenes.toilet.yaw,
    },
};

scenes.bedRoomA.hotSpotsItems = {
    sittingRoomStep2: {
        type: "scene",
        sceneId: "sittingRoomStep2",
        text: "Keluar dari Kamar I",
        pitch: 0,
        yaw: 22,
        targetYaw: toRotatedYaw(scenes.sittingRoomStep2.hotSpotsItems.bedRoomA.yaw, 180),
    },
};

scenes.bedRoomB.hotSpotsItems = {
    sittingRoomStep2: {
        type: "scene",
        sceneId: "sittingRoomStep2",
        text: "Keluar dari Kamar II",
        pitch: 0,
        yaw: 5,
        targetYaw: toRotatedYaw(scenes.sittingRoomStep2.hotSpotsItems.bedRoomB.yaw, 180),
    },
};

scenes.toilet.hotSpotsItems = {
    sittingRoomStep3: {
        type: "scene",
        sceneId: "sittingRoomStep3",
        text: "Keluar dari Toilet",
        pitch: 0,
        yaw: -100,
        targetYaw: toRotatedYaw(scenes.sittingRoomStep3.hotSpotsItems.toilet.yaw, 180),
    },
};

scenes.backYard.hotSpotsItems = {
    sittingRoomStep3: {
        type: "scene",
        sceneId: "sittingRoomStep3",
        text: "Masuk",
        pitch: 0,
        yaw: -58,
        targetYaw: toRotatedYaw(scenes.sittingRoomStep3.hotSpotsItems.backYard.yaw, 180),
    },
};

export const panellumSrc = {
    default: {
        firstScene: "frontYard",
        sceneFadeDuration: 1000
    },
    scenes: (() => {
        const srcScenes = {};
        Object.entries(scenes).forEach(([sceneId, sceneItem]) => {
            const { hotSpotsItems, ...scene } = sceneItem;
            if(hotSpotsItems) {
                for(let key in hotSpotsItems) {
                    if(!scene.hotSpots)
                        scene.hotSpots = [];
                    scene.hotSpots.push(hotSpotsItems[key]);
                }
            }
            srcScenes[sceneId] = scene;
            console.log(sceneId, scene)
        });
        return srcScenes;
    })()
};

export const panellumDefaultYaw = panellumSrc.scenes.frontYard.yaw;