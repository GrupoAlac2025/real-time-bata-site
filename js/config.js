window.ALAD_CONFIG = {
  "stageWidth": 768,
  "stageHeight": 384,
  "fitMode": "cover",
  "bgColor": "#000000",
  "transition": 0.8,
  "backgroundFade": false,
  "clockTimezone": "America/Lima",
  "projectId": "p_mvjnz9zqfnr9cv",
  "backgrounds": [
    {
      "id": "b_mvjo4gomqiblot",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mvjnz9zqfnr9cv/1792711433903_real_time_bata_arte_1.mp4",
      "duration": 7,
      "breakpoints": [
        "__base__"
      ],
      "condition": {
        "type": "timeRange",
        "from": "06:00",
        "to": "12:00"
      }
    },
    {
      "id": "b_mvjo4lzqulziag",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mvjnz9zqfnr9cv/1792711433908_real_time_bata_arte_2.mp4",
      "duration": 7,
      "breakpoints": [
        "__base__"
      ],
      "condition": {
        "type": "timeRange",
        "from": "12:01",
        "to": "18:00"
      }
    },
    {
      "id": "b_mvjo4pkam24y1m",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mvjnz9zqfnr9cv/1792711433910_real_time_bata_arte_3.mp4",
      "duration": 7,
      "breakpoints": [
        "__base__"
      ],
      "condition": {
        "type": "timeRange",
        "from": "18:01",
        "to": "23:59"
      }
    },
    {
      "id": "b_mvk5fn5oq4hf6c",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mvjnz9zqfnr9cv/1792711433912_alac_1548-1549_480x660_dia.mp4",
      "duration": 7,
      "breakpoints": [
        "bp_mvk4kjx3jqctkg"
      ],
      "condition": null
    },
    {
      "id": "b_mvk5foz2gsx2j8",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mvjnz9zqfnr9cv/1792711433914_alac_1548-1549_480x660_noche.mp4",
      "duration": 7,
      "breakpoints": [
        "bp_mvk4kjx3jqctkg"
      ],
      "condition": null
    },
    {
      "id": "b_mvk5fqg9lo1ni7",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mvjnz9zqfnr9cv/1792711433915_alac_1548-1549_480x660_tarde.mp4",
      "duration": 7,
      "breakpoints": [
        "bp_mvk4kjx3jqctkg"
      ],
      "condition": null
    },
    {
      "id": "b_mvk5qahcury3n8",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mvjnz9zqfnr9cv/1792711433918_alac_1202_576x576_dia.mp4",
      "duration": 7,
      "breakpoints": [
        "bp_mvk3nsmdw3hs6l"
      ],
      "condition": null
    },
    {
      "id": "b_mvk5qf7vrdf8wl",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mvjnz9zqfnr9cv/1792711433920_alac_1202_576x576_tarde.mp4",
      "duration": 7,
      "breakpoints": [
        "bp_mvk3nsmdw3hs6l"
      ],
      "condition": null
    },
    {
      "id": "b_mvk5qgv786xtiu",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mvjnz9zqfnr9cv/1792711433922_alac_1202_576x576_noche.mp4",
      "duration": 7,
      "breakpoints": [
        "bp_mvk3nsmdw3hs6l"
      ],
      "condition": null
    }
  ],
  "resources": [],
  "weather": {
    "enabled": false,
    "lat": -12.0464,
    "lon": -77.0428,
    "city": "Lima",
    "unit": "celsius",
    "refresh": 15
  },
  "apiRefreshMin": 1,
  "breakpoints": [
    {
      "id": "bp_mvk3nsmdw3hs6l",
      "maxWidth": 576,
      "width": 576,
      "height": 576
    },
    {
      "id": "bp_mvk4kjx3jqctkg",
      "maxWidth": 480,
      "width": 480,
      "height": 660
    }
  ],
  "elements": [
    {
      "id": "e_mvjo95e6lkhs79",
      "resourceId": "",
      "type": "clock",
      "enabled": true,
      "x": 56.8,
      "y": 19.6,
      "width": 34.3,
      "height": 25,
      "align": "center",
      "zIndex": 2,
      "fontSize": 80,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "Neue Haas Grotesk Display Pro 75 Bold",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {
        "bp_mvk3nsmdw3hs6l": {
          "x": -4.6,
          "y": 5.4,
          "width": 86.4,
          "height": 24.1,
          "fontSize": 130
        },
        "bp_mvk4kjx3jqctkg": {
          "x": -3.1,
          "y": 10.3,
          "width": 82.6,
          "height": 18,
          "fontSize": 100
        }
      },
      "clockShowHours": true,
      "clockShowMinutes": true,
      "clockShowSeconds": false,
      "clock12": false,
      "showDate": false,
      "padZero": true,
      "clockShowAmPm": true
    },
    {
      "id": "e_mvjoarnh30badd",
      "resourceId": "",
      "type": "ampm",
      "enabled": true,
      "x": 84.3,
      "y": 29,
      "width": 15.2,
      "height": 15.4,
      "align": "center",
      "zIndex": 2,
      "fontSize": 40,
      "fontWeight": "400",
      "color": "#ffffff",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "NHaasGroteskTXPro-55Rg",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {
        "bp_mvk4kjx3jqctkg": {
          "x": 57.4,
          "y": 15.6,
          "width": 39.6,
          "height": 11.4,
          "fontSize": 60
        },
        "bp_mvk3nsmdw3hs6l": {
          "x": 63,
          "y": 15.4,
          "width": 25.9,
          "height": 12.1,
          "fontSize": 60
        }
      },
      "ampmUppercase": true
    }
  ]
};
