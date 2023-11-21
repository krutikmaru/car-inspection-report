export const structure = [
  {
    inspectionTitle: "Engine and Transmission",
    fields: [
      "radiator_condition",
      "engine_noise",
      "engine_belts",
      "battery",
      "engine_smoke",
      "gear_level",
      "radiator_fan",
      "engine_oil",
      "coolant",
      "engine_idling",
      "gear_shifting",
      "4wd_system_condition",
    ],
    bookmark: "engine-and-transmission",
    initialState: {
      radiator_condition: {
        title: "Radiator Condition",
        value: "NA",
      },
      engine_noise: {
        title: "Engine Noise",
        value: "NA",
      },
      engine_belts: {
        title: "Engine Belts",
        value: "NA",
      },
      battery: {
        title: "Battery",
        value: "NA",
      },
      engine_smoke: {
        title: "Engine Smoke",
        value: "NA",
      },
      gear_level: {
        title: "Gear Level",
        value: "NA",
      },
      radiator_fan: {
        title: "Radiator Fan",
        value: "NA",
      },
      engine_oil: {
        title: "Engine Oil",
        value: "NA",
      },
      coolant: {
        title: "Coolant",
        value: "NA",
      },
      engine_idling: {
        title: "Engine Idling",
        value: "NA",
      },
      gear_shifting: {
        title: "Gear Shifting",
        value: "NA",
      },
      "4wd_system_condition": {
        title: "4WD System Condition",
        value: "NA",
      },
    },
  },
  {
    inspectionTitle: "Steering, Suspension & Brakes",
    fields: [
      "brake_pads",
      "parking_brake_operations",
      "shock_absorber_operation",
      "steering_alignment",
      "brake_discs_lining",
      "suspension",
      "steering_operations",
      "wheel_alignment",
    ],
    bookmark: "engine-steering-suspension-brakes",
    initialState: {
      brake_pads: {
        title: "Brake Pads",
        value: "NA",
      },
      parking_brake_operations: {
        title: "Parking Brake Operations",
        value: "NA",
      },
      shock_absorber_operation: {
        title: "Shock Absorber Operations",
        value: "NA",
      },
      steering_alignment: {
        title: "Steering Alignment",
        value: "NA",
      },
      brake_discs_lining: {
        title: "Brake Discs Or Lining",
        value: "NA",
      },
      suspension: {
        title: "Suspension",
        value: "NA",
      },
      steering_operations: {
        title: "Steering Operations",
        value: "NA",
      },
      wheel_alignment: {
        title: "Wheel Alignment",
        value: "NA",
      },
    },
  },
  {
    inspectionTitle: "Interior, Electricals & AirConditioner",
    fields: [
      "speedometer_cluster",
      "seat_controls",
      "central_lock_operation",
      "headlights",
      "sunroof_condition",
      "cruise_control",
      "ac_cooling",
      "head_lining",
      "boot_trunk_area",
      "navigation_control",
      "tail_lights",
      "windows_controls_condition",
      "push_start_stop",
      "convertible_operations",
    ],
    bookmark: "interior-electricals-airconditioner",
    initialState: {
      speedometer_cluster: {
        title: "Speedometer Cluster",
        value: "NA",
      },
      seat_controls: {
        title: "Seat Controls",
        value: "NA",
      },
      central_lock_operation: {
        title: "Central Lock Operation",
        value: "NA",
      },
      headlights: {
        title: "Headlights",
        value: "NA",
      },
      sunroof_condition: {
        title: "Sunroof Condition",
        value: "NA",
      },
      cruise_control: {
        title: "Cruise Control",
        value: "NA",
      },
      ac_cooling: {
        title: "AC Cooling",
        value: "NA",
      },
      head_lining: {
        title: "Head Lining",
        value: "NA",
      },
      boot_trunk_area: {
        title: "Boot/Trunk Area",
        value: "NA",
      },
      navigation_control: {
        title: "Navigation Control",
        value: "NA",
      },
      tail_lights: {
        title: "Tail Lights",
        value: "NA",
      },
      windows_controls_condition: {
        title: "Windows Controls & Condition",
        value: "NA",
      },
      push_start_stop: {
        title: "Push Start/Stop",
        value: "NA",
      },
      convertible_operations: {
        title: "convertible_operations",
        value: "NA",
      },
    },
  },
  {
    inspectionTitle: "Car Specs",
    fields: [
      "parking_sensors",
      "alarm_anti_theft_system",
      "premium_sound_system",
      "heads_up_display",
      "bluetooth_system",
      "climate_control",
      "keyless_entry",
      "keyless_start",
      "leather_seats",
      "cooled_seats",
      "heated_seats",
      "power_seats",
      "view_camera",
      "blind_spot_indicator",
      "anti_lock_brakes_abs",
      "cruise_control",
      "adaptive_cruise_control",
      "triptonic_gears",
      "night_vision",
      "carbon_fiber_interior",
      "lane_change_assist",
      "ceramic_brakes",
      "lift_kit",
      "park_assist",
      "adaptive_suspension",
      "height_control",
      "navigation_system",
      "drive",
      "sunroof_type",
      "wheels_type",
      "rim_size_front",
      "rim_size_rear",
      "side_steps",
      "convertible",
    ],
    bookmark: "car-specs",
    initialState: {
      parking_sensors: {
        title: "Parking Sensors",
        value: "NA",
        values: ["available", "unavailable"],
      },
      alarm_anti_theft_system: {
        title: "Alarm/Anti-Theft System",
        value: "NA",
      },
      premium_sound_system: {
        title: "Premium Sound System",
        value: "NA",
      },
      heads_up_display: {
        title: "Heads Up Display",
        value: "NA",
      },
      bluetooth_system: {
        title: "Bluetooth System",
        value: "NA",
      },
      climate_control: {
        title: "Climate Control",
        value: "NA",
      },
      keyless_entry: {
        title: "Keyless Entry",
        value: "NA",
      },
      keyless_start: {
        title: "Keyless Start",
        value: "NA",
      },
      leather_seats: {
        title: "Leather Seats",
        value: "NA",
      },
      cooled_seats: {
        title: "Cooled Seats",
        value: "NA",
      },
      heated_seats: {
        title: "Heated Seats",
        value: "NA",
      },
      power_seats: {
        title: "Power Seats",
        value: "NA",
      },
      view_camera: {
        title: "View Camera",
        value: "NA",
      },
      blind_spot_indicator: {
        title: "Blind Spot Indicator",
        value: "NA",
      },
      anti_lock_brakes_abs: {
        title: "Anti-Lock Brakes/ABS",
        value: "NA",
      },
      cruise_control: {
        title: "Cruise Control",
        value: "NA",
      },
      adaptive_cruise_control: {
        title: "Adaptive Cruise Control",
        value: "NA",
      },
      triptonic_gears: {
        title: "Triptonic Gears",
        value: "NA",
      },
      night_vision: {
        title: "Night Vision",
        value: "NA",
      },
      carbon_fiber_interior: {
        title: "Carbon Fiber Interior",
        value: "NA",
      },
      lane_change_assist: {
        title: "Lane Change Assist",
        value: "NA",
      },
      ceramic_brakes: {
        title: "Ceramic Brakes",
        value: "NA",
      },
      lift_kit: {
        title: "Lift Kit",
        value: "NA",
      },
      park_assist: {
        title: "Park Assist",
        value: "NA",
      },
      adaptive_suspension: {
        title: "Adaptive Suspension",
        value: "NA",
      },
      height_control: {
        title: "Height Control",
        value: "NA",
      },
      navigation_system: {
        title: "Navigation System",
        value: "NA",
      },
      drive: {
        title: "Drive",
        value: "NA",
      },
      sunroof_type: {
        title: "Sunroof Type",
        value: "NA",
      },
      wheels_type: {
        title: "Wheels Type",
        value: "NA",
      },
      rim_size_front: {
        title: "Rim Size(Front)",
        value: "NA",
      },
      rim_size_rear: {
        title: "Rim Size(Rear)",
        value: "NA",
      },
      side_steps: {
        title: "Side Steps",
        value: "NA",
      },
      convertible: {
        title: "Convertible",
        value: "NA",
      },
    },
  },
];
