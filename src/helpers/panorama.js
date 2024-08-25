
export const toYaw = yaw => {
    if(typeof yaw != "number")
        throw new Error("yaw is not number");

    if(yaw > 180) {
        while(yaw > 180) {
            yaw -= 360;
        }
    } else if(yaw < -180) {
        while(yaw < -180) {
            yaw += 360;
        }
    }
    return yaw;
};

export const toRotatedYaw = (yaw, yawRotation) => toYaw(yaw + yawRotation);