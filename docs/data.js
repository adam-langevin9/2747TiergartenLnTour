var APP_DATA = {
    scenes: [
        {
            id: "0-360-hdr-1",
            name: "Entryway",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: -2.58859501244309,
                pitch: 0.05075757523010793,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: -0.6038783883178773,
                    pitch: 0.771093852641016,
                    rotation: 0,
                    target: "1-360-hdr-2",
                },
                {
                    yaw: -2.5256484359098614,
                    pitch: 0.9224022286883837,
                    rotation: 0,
                    target: "2-360-hdr-3",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "1-360-hdr-2",
            name: "Downstairs Bathroom",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: -0.22227511550063106,
                pitch: 0.18236296647185313,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: -1.7509110623699478,
                    pitch: 0.8078637706826228,
                    rotation: 0,
                    target: "0-360-hdr-1",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "2-360-hdr-3",
            name: "Foyer 1",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: 0.27706123551837436,
                pitch: 0.12014501320498638,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: -1.639577719272193,
                    pitch: 0.8499807244296136,
                    rotation: 0,
                    target: "0-360-hdr-1",
                },
                {
                    yaw: 3.1410399564817446,
                    pitch: 0.8333636604947223,
                    rotation: 0,
                    target: "9-360-hdr-10",
                },
                {
                    yaw: -0.07957120967178,
                    pitch: 1.0413733931568814,
                    rotation: 0,
                    target: "3-360-hdr-4",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "3-360-hdr-4",
            name: "Foyer 2",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: -2.4708547832612275,
                pitch: 0.2377845412927435,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: 3.11583234436935,
                    pitch: 0.6080693565628685,
                    rotation: 0,
                    target: "4-360-hdr-5",
                },
                {
                    yaw: -0.03543128541821261,
                    pitch: 0.9437912557603472,
                    rotation: 0,
                    target: "2-360-hdr-3",
                },
                {
                    yaw: -1.5883672279503127,
                    pitch: 0.4818987903393328,
                    rotation: 0,
                    target: "5-360-hdr-6",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "4-360-hdr-5",
            name: "Kitchen",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: 2.9269198782999766,
                pitch: 0.21780099504078265,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: -1.6032779573175588,
                    pitch: 0.5449468612146262,
                    rotation: 0,
                    target: "3-360-hdr-4",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "5-360-hdr-6",
            name: "Foyer 3",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: 1.664435572409248,
                pitch: 0.08135467279418762,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: -0.606095369139533,
                    pitch: 0.4551161415611258,
                    rotation: 0,
                    target: "3-360-hdr-4",
                },
                {
                    yaw: 0.9823304865645301,
                    pitch: 0.5594614406726741,
                    rotation: 0,
                    target: "6-360-hdr-7",
                },
                {
                    yaw: 3.0685982038054807,
                    pitch: 0.5770681826696578,
                    rotation: 0,
                    target: "8-360-hdr-9",
                },
                {
                    yaw: 1.8178630142178367,
                    pitch: 0.36810393954772813,
                    rotation: 0,
                    target: "7-360-hdr-8",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "6-360-hdr-7",
            name: "Dining Room 1",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: 0.9472064651886214,
                    pitch: 0.5514173806170781,
                    rotation: 0,
                    target: "5-360-hdr-6",
                },
                {
                    yaw: 0.5732091463954632,
                    pitch: 0.3342559273732846,
                    rotation: 0,
                    target: "8-360-hdr-9",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "7-360-hdr-8",
            name: "Dining Room 2",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: 0.7466565499563593,
                pitch: 0.10083599322563686,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: 0.6904132816891106,
                    pitch: 0.3429292880291648,
                    rotation: 0,
                    target: "5-360-hdr-6",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "8-360-hdr-9",
            name: "Living Room",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: 2.4681607488875787,
                pitch: 0.2636518252352058,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: 2.1017753886648274,
                    pitch: 0.36372434624065164,
                    rotation: 0,
                    target: "6-360-hdr-7",
                },
                {
                    yaw: 1.5037757745542635,
                    pitch: 0.5764566803400619,
                    rotation: 0,
                    target: "5-360-hdr-6",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "9-360-hdr-10",
            name: "Bottom of Stairs",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.7629696370579371,
                    pitch: 0.9741589590598565,
                    rotation: 0,
                    target: "2-360-hdr-3",
                },
                {
                    yaw: 0.8052563147564644,
                    pitch: -0.23231824823244196,
                    rotation: 0,
                    target: "10-360-hdr-11",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "10-360-hdr-11",
            name: "Middle of Stairs",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: -1.8392483148819707,
                pitch: 0.3153806596630133,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: -2.4716098603020153,
                    pitch: 0.8245492577645699,
                    rotation: 0,
                    target: "2-360-hdr-3",
                },
                {
                    yaw: -0.9063683103408877,
                    pitch: 0.343614115263545,
                    rotation: 0,
                    target: "11-360-hdr-12",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "11-360-hdr-12",
            name: "Top of Stairs",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: 2.4443156889897626,
                pitch: 0.30480809083598004,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: -2.3007955357872234,
                    pitch: 0.8661660129840456,
                    rotation: 0,
                    target: "10-360-hdr-11",
                },
                {
                    yaw: 2.5609328967397094,
                    pitch: 0.6590554560390753,
                    rotation: 0,
                    target: "12-360-hdr-13",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "12-360-hdr-13",
            name: "Bathroom 1",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: 1.4917676783485003,
                pitch: 0.2920306331040088,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: 2.8460950687370135,
                    pitch: 0.5914063275421153,
                    rotation: 0,
                    target: "11-360-hdr-12",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "13-360-hdr-14",
            name: "Upstairs Hallway 1",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                pitch: 0,
                yaw: 0,
                fov: 1.5707963267948966,
            },
            linkHotspots: [
                {
                    yaw: -0.5461719837695611,
                    pitch: 0.6343811475618466,
                    rotation: 0,
                    target: "14-360-hdr-15",
                },
                {
                    yaw: 1.4182567882008854,
                    pitch: 1.0321953374651223,
                    rotation: 0,
                    target: "11-360-hdr-12",
                },
                {
                    yaw: -3.0789053292013406,
                    pitch: 0.8974793214162737,
                    rotation: 0,
                    target: "15-360-hdr-16",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "14-360-hdr-15",
            name: "Bedroom 2",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: -0.40994738649309603,
                pitch: 0.26162503399835124,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: 1.9720286404899658,
                    pitch: 0.545925664463045,
                    rotation: 0,
                    target: "13-360-hdr-14",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "15-360-hdr-16",
            name: "Upstairs Hallway 2",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: 0.36469191674084556,
                pitch: 0.35399869962182606,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: 0.9523908161426213,
                    pitch: 0.8962834544100868,
                    rotation: 0,
                    target: "16-360-hdr-17",
                },
                {
                    yaw: 2.431408941468873,
                    pitch: 0.9027829339799069,
                    rotation: 0,
                    target: "13-360-hdr-14",
                },
                {
                    yaw: -0.5819696354469528,
                    pitch: 0.6218882241935333,
                    rotation: 0,
                    target: "17-360-hdr-18",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "16-360-hdr-17",
            name: "Upstairs Bathroom",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: 0.31619417838819075,
                pitch: 0.47199404819055957,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: 2.408367333762542,
                    pitch: 0.9592376975948689,
                    rotation: 0,
                    target: "15-360-hdr-16",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "17-360-hdr-18",
            name: "Primary Bedroom",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: 0.2944977049282045,
                pitch: 0.3714740907620744,
                fov: 1.4095584584939498,
            },
            linkHotspots: [
                {
                    yaw: -3.1247456640739717,
                    pitch: 0.7132573829806272,
                    rotation: 0,
                    target: "18-360-hdr-19",
                },
                {
                    yaw: 2.2002503797077093,
                    pitch: 0.5621886511012129,
                    rotation: 0,
                    target: "16-360-hdr-17",
                },
            ],
            infoHotspots: [],
        },
        {
            id: "18-360-hdr-19",
            name: "Primary Bathroom",
            levels: [
                {
                    tileSize: 256,
                    size: 256,
                    fallbackOnly: true,
                },
                {
                    tileSize: 512,
                    size: 512,
                },
                {
                    tileSize: 512,
                    size: 1024,
                },
                {
                    tileSize: 512,
                    size: 2048,
                },
            ],
            faceSize: 1344,
            initialViewParameters: {
                yaw: 2.7140136449656325,
                pitch: 0.4668033384325767,
                fov: 1.4095584584939498,
            },
            linkHotspots: [],
            infoHotspots: [],
        },
    ],
    name: "2747 Tiergarten Lane Tour",
    settings: {
        mouseViewMode: "drag",
        autorotateEnabled: false,
        fullscreenButton: true,
        viewControlButtons: false,
    },
};
