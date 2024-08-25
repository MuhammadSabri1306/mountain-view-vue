import { toRotatedYaw } from "@/helpers/panorama";

export const assets = {
    street1: "/assets/img/panorama/street/street-1.JPG",
    street2: "/assets/img/panorama/street/street-2.JPG",
    street3: "/assets/img/panorama/street/street-3.JPG",
    street4: "/assets/img/panorama/street/street-4.JPG",
    street5: "/assets/img/panorama/street/street-5.JPG",
    street6: "/assets/img/panorama/street/street-6.JPG",
    street7: "/assets/img/panorama/street/street-7.JPG",
    street8: "/assets/img/panorama/street/street-8.JPG",
    street9: "/assets/img/panorama/street/street-9.JPG",
    street10: "/assets/img/panorama/street/street-10.JPG",
    street11: "/assets/img/panorama/street/street-11.JPG",
    street12: "/assets/img/panorama/street/street-12.JPG",
};

const scenes = {
    street1: {
        yaw: 83,
        type: "equirectangular",
        panorama: assets.street1,
    },
    street2: {
        yaw: 3,
        type: "equirectangular",
        panorama: assets.street2,
    },
    street3: {
        yaw: -99,
        type: "equirectangular",
        panorama: assets.street3,
    },
    street4: {
        yaw: -96,
        type: "equirectangular",
        panorama: assets.street4,
    },
    street5: {
        yaw: 180,
        type: "equirectangular",
        panorama: assets.street5,
    },
    street6: {
        yaw: 180,
        type: "equirectangular",
        panorama: assets.street6,
    },
    street7: {
        yaw: 180,
        type: "equirectangular",
        panorama: assets.street7,
    },
    street8: {
        yaw: 180,
        type: "equirectangular",
        panorama: assets.street8,
    },
    street9: {
        yaw: -178,
        type: "equirectangular",
        panorama: assets.street9,
    },
    street10: {
        yaw: 0,
        type: "equirectangular",
        panorama: assets.street10,
    },
    street11: {
        yaw: 174,
        type: "equirectangular",
        panorama: assets.street11,
    },
    street12: {
        yaw: 0,
        type: "equirectangular",
        panorama: assets.street12,
    },
};

scenes.street1.hotSpotsItems = {
    street2: {
        type: "scene",
        sceneId: "street2",
        pitch: -3,
        yaw: scenes.street1.yaw,
        targetYaw: scenes.street2.yaw
    },
};

scenes.street2.hotSpotsItems = {
    street1: {
        type: "scene",
        sceneId: "street1",
        pitch: -4,
        yaw: -175,
        targetYaw: toRotatedYaw(scenes.street1.hotSpotsItems.street2.targetYaw, 180)
    },
    street3: {
        type: "scene",
        sceneId: "street3",
        pitch: -1,
        yaw: 3,
        targetYaw: scenes.street3.yaw
    },
};

scenes.street3.hotSpotsItems = {
    street2: {
        type: "scene",
        sceneId: "street2",
        pitch: 2,
        yaw: 85,
        targetYaw: toRotatedYaw(scenes.street2.hotSpotsItems.street3.yaw, 180)
    },
    street4: {
        type: "scene",
        sceneId: "street4",
        pitch: -4,
        yaw: -95,
        targetYaw: scenes.street4.yaw
    },
    street9: {
        type: "scene",
        sceneId: "street9",
        pitch: -1,
        yaw: 178,
        targetYaw: scenes.street9.yaw
    },
};

scenes.street4.hotSpotsItems = {
    street3: {
        type: "scene",
        sceneId: "street3",
        pitch: 2,
        yaw: 84,
        targetYaw: toRotatedYaw(scenes.street3.hotSpotsItems.street4.yaw, 180)
    },
    street5: {
        type: "scene",
        sceneId: "street5",
        pitch: -3,
        yaw: 176,
        targetYaw: scenes.street5.yaw
    },
};

scenes.street5.hotSpotsItems = {
    street4: {
        type: "scene",
        sceneId: "street4",
        pitch: -4,
        yaw: -4,
        targetYaw: toRotatedYaw(scenes.street4.hotSpotsItems.street5.yaw, 180)
    },
    street6: {
        type: "scene",
        sceneId: "street6",
        pitch: 0,
        yaw: 174,
        targetYaw: scenes.street6.yaw
    },
};

scenes.street6.hotSpotsItems = {
    street5: {
        type: "scene",
        sceneId: "street5",
        pitch: -2,
        yaw: 0,
        targetYaw: toRotatedYaw(scenes.street5.hotSpotsItems.street6.yaw, 180)
    },
    street7: {
        type: "scene",
        sceneId: "street7",
        pitch: -3,
        yaw: 179,
        targetYaw: scenes.street7.yaw
    },
};

scenes.street7.hotSpotsItems = {
    street6: {
        type: "scene",
        sceneId: "street6",
        pitch: -2,
        yaw: -12,
        targetYaw: toRotatedYaw(scenes.street6.hotSpotsItems.street7.yaw, 180)
    },
    street8: {
        type: "scene",
        sceneId: "street8",
        pitch: -3,
        yaw: 169,
        targetYaw: scenes.street8.yaw
    },
};

scenes.street8.hotSpotsItems = {
    street7: {
        type: "scene",
        sceneId: "street7",
        pitch: -1,
        yaw: -18,
        targetYaw: toRotatedYaw(scenes.street7.hotSpotsItems.street8.yaw, 180)
    },
};

scenes.street9.hotSpotsItems = {
    street3: {
        type: "scene",
        sceneId: "street3",
        pitch: -5,
        yaw: 8,
        targetYaw: toRotatedYaw(scenes.street3.hotSpotsItems.street9.yaw, 180)
    },
    street10: {
        type: "scene",
        sceneId: "street10",
        pitch: 0,
        yaw: -174,
        targetYaw: scenes.street10.yaw
    },
};

scenes.street10.hotSpotsItems = {
    street9: {
        type: "scene",
        sceneId: "street9",
        pitch: -1,
        yaw: -176,
        targetYaw: toRotatedYaw(scenes.street9.hotSpotsItems.street10.yaw, 180)
    },
    street11: {
        type: "scene",
        sceneId: "street11",
        pitch: -3,
        yaw: 2,
        targetYaw: scenes.street11.yaw
    },
};

scenes.street11.hotSpotsItems = {
    street10: {
        type: "scene",
        sceneId: "street10",
        pitch: -2,
        yaw: -6,
        targetYaw: toRotatedYaw(scenes.street10.hotSpotsItems.street11.yaw, 180)
    },
    street12: {
        type: "scene",
        sceneId: "street12",
        pitch: -5,
        yaw: 177,
        targetYaw: scenes.street12.yaw
    },
};

scenes.street12.hotSpotsItems = {
    street11: {
        type: "scene",
        sceneId: "street11",
        pitch: -3,
        yaw: 178,
        targetYaw: toRotatedYaw(scenes.street11.hotSpotsItems.street12.yaw, 180)
    },
};

export const panellumSrc = {
    default: {
        firstScene: "street1",
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
        });
        return srcScenes;
    })()
};

export const panellumDefaultYaw = panellumSrc.scenes[panellumSrc.default.firstScene]?.yaw || 0;

// export const toPanellumTestData = (sceneId) => {
//     const panellumSrcTest = {
//         default: {
//             firstScene: sceneId,
//             sceneFadeDuration: 1000
//         },
//         scenes: panellumSrc.scenes
//     };
//     const panellumDefaultYawTest = panellumSrcTest.scenes[panellumSrcTest.default.firstScene]?.yaw || 0;
//     return { panellumSrcTest, panellumDefaultYawTest };
// };