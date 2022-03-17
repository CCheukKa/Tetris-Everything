const chartZ = [
    // clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, -1),
            new Coordinate(0, 2),
            new Coordinate(-1, 2),
            new Coordinate(0, -1), //! non-vanilla
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, 1),
            new Coordinate(0, -2),
            new Coordinate(1, -2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, -1),
            new Coordinate(0, 2),
            new Coordinate(1, 2),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, 1),
            new Coordinate(0, -2),
            new Coordinate(-1, -2),
        ],
    ],

    // counter-clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, -1),
            new Coordinate(0, 2),
            new Coordinate(1, 2),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, 1),
            new Coordinate(0, -2),
            new Coordinate(1, -2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, -1),
            new Coordinate(0, 2),
            new Coordinate(-1, 2),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, 1),
            new Coordinate(0, -2),
            new Coordinate(-1, -2),
        ],
    ],

    // 180
    [
        // 0
        [
            new Coordinate(0, -1), //! Stabiliser
            new Coordinate(0, 0),
        ],

        // 1
        [
            new Coordinate(1, 0), //! Stabiliser
            new Coordinate(0, 0),
        ],

        // 2
        [
            new Coordinate(0, 1), //! Stabiliser
            new Coordinate(0, 0),
        ],

        // 3
        [
            new Coordinate(-1, 0), //! Stabiliser
            new Coordinate(0, 0),
        ],
    ]
];
const chartL = [
    // clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, -1),
            new Coordinate(0, 2),
            new Coordinate(-1, 2),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, 1),
            new Coordinate(0, -2),
            new Coordinate(1, -2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, -1),
            new Coordinate(0, 2),
            new Coordinate(1, 2),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, 1),
            new Coordinate(0, -2),
            new Coordinate(-1, -2),
        ],
    ],

    // counter-clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, -1),
            new Coordinate(0, 2),
            new Coordinate(1, 2),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, 1),
            new Coordinate(0, -2),
            new Coordinate(1, -2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, -1),
            new Coordinate(0, 2),
            new Coordinate(-1, 2),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, 1),
            new Coordinate(0, -2),
            new Coordinate(-1, -2),
        ],
    ],

    // 180
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(0, -1),
            new Coordinate(-1, 0),
            new Coordinate(2, -1),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(0, -1),
            new Coordinate(1, 2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(0, 1),
            new Coordinate(1, 0),
            new Coordinate(-2, 1),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(0, 1),
            new Coordinate(-1, -2),
        ],
    ]
];
const chartO = [
    // clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
        ],

        // 1
        [
            new Coordinate(0, 0),
        ],

        // 2
        [
            new Coordinate(0, 0),
        ],

        // 3
        [
            new Coordinate(0, 0),
        ],
    ],

    // counter-clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
        ],

        // 1
        [
            new Coordinate(0, 0),
        ],

        // 2
        [
            new Coordinate(0, 0),
        ],

        // 3
        [
            new Coordinate(0, 0),
        ],
    ],

    // 180
    [
        // 0
        [
            new Coordinate(0, 0),
        ],

        // 1
        [
            new Coordinate(0, 0),
        ],

        // 2
        [
            new Coordinate(0, 0),
        ],

        // 3
        [
            new Coordinate(0, 0),
        ],
    ]
];
const chartS = [
    // clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, -1),
            new Coordinate(0, 2),
            new Coordinate(-1, 2),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, 1),
            new Coordinate(0, -2),
            new Coordinate(1, -2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, -1),
            new Coordinate(0, 2),
            new Coordinate(1, 2),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, 1),
            new Coordinate(0, -2),
            new Coordinate(-1, -2),
        ],
    ],

    // counter-clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, -1),
            new Coordinate(0, 2),
            new Coordinate(1, 2),
            new Coordinate(0, -1), //! non-vanilla
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, 1),
            new Coordinate(0, -2),
            new Coordinate(1, -2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, -1),
            new Coordinate(0, 2),
            new Coordinate(-1, 2),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, 1),
            new Coordinate(0, -2),
            new Coordinate(-1, -2),
        ],
    ],

    // 180
    [
        // 0
        [
            new Coordinate(0, -1), //! Stabiliser
            new Coordinate(0, 0),
        ],

        // 1
        [
            new Coordinate(1, 0), //! Stabiliser
            new Coordinate(0, 0),
        ],

        // 2
        [
            new Coordinate(0, 1), //! Stabiliser
            new Coordinate(0, 0),
        ],

        // 3
        [
            new Coordinate(-1, 0), //! Stabiliser
            new Coordinate(0, 0),
        ],
    ]
];
const chartI = [
    // clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(-2, 0),
            new Coordinate(1, 0),
            new Coordinate(-2, 1),
            new Coordinate(1, -2),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(2, 0),
            new Coordinate(-1, -2),
            new Coordinate(2, 1),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(2, 0),
            new Coordinate(-1, 0),
            new Coordinate(2, -1),
            new Coordinate(-1, 2),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(-2, 0),
            new Coordinate(1, 2),
            new Coordinate(-2, -1),
        ],
    ],

    // counter-clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(2, 0),
            new Coordinate(-1, -2),
            new Coordinate(2, 1),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(2, 0),
            new Coordinate(-1, 0),
            new Coordinate(2, -1),
            new Coordinate(-1, 2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(-2, 0),
            new Coordinate(1, 2),
            new Coordinate(-2, -1),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-2, 0),
            new Coordinate(1, 0),
            new Coordinate(-2, 1),
            new Coordinate(1, -2),
        ],
    ],

    // 180
    [
        // 0
        [
            new Coordinate(0, -1), //! Stabiliser
            new Coordinate(0, 0),
        ],

        // 1
        [
            new Coordinate(1, 0), //! Stabiliser
            new Coordinate(0, 0),
        ],

        // 2
        [
            new Coordinate(0, 1), //! Stabiliser
            new Coordinate(0, 0),
        ],

        // 3
        [
            new Coordinate(-1, 0), //! Stabiliser
            new Coordinate(0, 0),
        ],
    ]
];
const chartJ = [
    // clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, -1),
            new Coordinate(0, 2),
            new Coordinate(-1, 2),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, 1),
            new Coordinate(0, -2),
            new Coordinate(1, -2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, -1),
            new Coordinate(0, 2),
            new Coordinate(1, 2),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, 1),
            new Coordinate(0, -2),
            new Coordinate(-1, -2),
        ],
    ],

    // counter-clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, -1),
            new Coordinate(0, 2),
            new Coordinate(1, 2),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, 1),
            new Coordinate(0, -2),
            new Coordinate(1, -2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, -1),
            new Coordinate(0, 2),
            new Coordinate(-1, 2),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, 1),
            new Coordinate(0, -2),
            new Coordinate(-1, -2),
        ],
    ],

    // 180
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(0, -1),
            new Coordinate(1, 0),
            new Coordinate(-2, -1),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(0, 1),
            new Coordinate(1, -2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(0, 1),
            new Coordinate(-1, 0),
            new Coordinate(2, 1),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(0, -1),
            new Coordinate(-1, 2),
        ],
    ]
];
const chartT = [
    // clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, -1),
            new Coordinate(0, 2),
            new Coordinate(-1, 2),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, 1),
            new Coordinate(0, -2),
            new Coordinate(1, -2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, -1),
            new Coordinate(0, 2),
            new Coordinate(1, 2),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, 1),
            new Coordinate(0, -2),
            new Coordinate(-1, -2),
        ],
    ],

    // counter-clockwise
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, -1),
            new Coordinate(0, 2),
            new Coordinate(1, 2),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, 1),
            new Coordinate(0, -2),
            new Coordinate(1, -2),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, -1),
            new Coordinate(0, 2),
            new Coordinate(-1, 2),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, 1),
            new Coordinate(0, -2),
            new Coordinate(-1, -2),
        ],
    ],

    // 180
    [
        // 0
        [
            new Coordinate(0, 0),
            new Coordinate(0, -1),
            new Coordinate(1, -1),
            new Coordinate(-1, -1),
            new Coordinate(1, 0),
            new Coordinate(-1, 0),
        ],

        // 1
        [
            new Coordinate(0, 0),
            new Coordinate(1, 0),
            new Coordinate(1, -2),
            new Coordinate(1, -1),
            new Coordinate(0, -2),
            new Coordinate(0, -1),
        ],

        // 2
        [
            new Coordinate(0, 0),
            new Coordinate(0, 1),
            new Coordinate(-1, 1),
            new Coordinate(-1, -1),
            new Coordinate(1, 0),
            new Coordinate(-1, 0),
        ],

        // 3
        [
            new Coordinate(0, 0),
            new Coordinate(-1, 0),
            new Coordinate(-1, -2),
            new Coordinate(-1, -1),
            new Coordinate(0, -2),
            new Coordinate(0, -1),
        ],
    ]
];