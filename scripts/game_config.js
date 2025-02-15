var game_config = `
{
    "prematch": [
        {
            "id": "scouter_name",
            "type": "text",
            "text": "紀錄者姓名",
            "default_value": ""
        },
        {
            "id": "game_number",
            "type": "text",
            "text": "比賽場次",
            "default_value": "1"
        },
        {
            "id": "team_number",
            "type": "text",
            "text": "隊伍編號",
            "default_value": ""
        }
    ],
    "auto": [
        {
            "id": "auto_taxi",
            "type": "checkbox",
            "text": "離開起始區域"
        },
        {
            "id": "auto_l4",
            "type": "counter",
            "text": "自動L4",
            "default_value": "0"
        },
        {
            "id": "auto_l3",
            "type": "counter",
            "text": "自動L3",
            "default_value": "0"
        },
        {
            "id": "auto_l2",
            "type": "counter",
            "text": "自動L2",
            "default_value": "0"
        },
        {
            "id": "auto_l1",
            "type": "counter",
            "text": "自動L1",
            "default_value": "0"
        },
        {
            "id": "auto_processor",
            "type": "counter",
            "text": "自動Processor",
            "default_value": "0"
        },
        {
            "id": "auto_net",
            "type": "counter",
            "text": "自動Net",
            "default_value": "0"
        }
    ],
    "teleop": [
        {
            "id": "teleop_l4",
            "type": "counter",
            "text": "手動L4",
            "default_value": "0"
        },
        {
            "id": "teleop_l3",
            "type": "counter",
            "text": "手動L3",
            "default_value": "0"
        },
        {
            "id": "teleop_l2",
            "type": "counter",
            "text": "手動L2",
            "default_value": "0"
        },
        {
            "id": "teleop_l1",
            "type": "counter",
            "text": "手動L1",
            "default_value": "0"
        },
        {
            "id": "teleop_processor",
            "type": "counter",
            "text": "手動Processor",
            "default_value": "0"
        },
        {
            "id": "teleop_net",
            "type": "counter",
            "text": "手動Net",
            "default_value": "0"
        }
    ],
    "endgame": [
        {
            "id": "endgame_state",
            "type": "radio",
            "text": "Endgame狀態",
            "choices": {
                "no": "未得分",
                "park": "Park",
                "shallow": "Shallow",
                "deep": "Deep"
            },
            "default_value": ""
        },
        {
            "id": "can_take_algae_from_reef",
            "type": "checkbox",
            "text": "可從Reef獲取Algae"
        },
        {
            "id": "tippy",
            "type": "checkbox",
            "text": "運行時搖晃不穩"
        },
        {
            "id": "damaged",
            "type": "checkbox",
            "text": "運行時故障或損壞(任何程度)"
        },
        {
            "id": "major_foul",
            "type": "checkbox",
            "text": "重大犯規(推倒、撞擊CAGE等)"
        },
        {
            "id": "comments",
            "type": "textarea",
            "text": "其他評論或無法記錄的部分"
        }
    ],
    "result": [
        {
            "id": "result",
            "type": "radio",
            "text": "聯盟勝負",
            "choices": {
                "lose": "lose",
                "tie": "tie",
                "win": "win"
            },
            "default_value": ""
        },
        {
            "id": "auto_rp",
            "type": "checkbox",
            "text": "獲得Auto RP"
        },
        {
            "id": "coral_rp",
            "type": "checkbox",
            "text": "獲得Coral RP"
        },
        {
            "id": "brage_rp",
            "type": "checkbox",
            "text": "獲得Brage RP"
        }
    ],
    "final":[]
}`;
