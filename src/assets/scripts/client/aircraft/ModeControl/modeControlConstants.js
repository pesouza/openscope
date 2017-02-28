/**
 * Available values for `ModeController#altitudeMode`
 *
 * @memberof MCP_MODE
 * @property MCP_ALTITUDE_MODES
 * @type {Object}
 * @final
 */
export const MCP_ALTITUDE_MODES = {
    HOLD: 'HOLD',
    APPROACH: 'APPROACH',
    LEVEL_CHANGE: 'LEVEL_CHANGE',
    OFF: 'OFF',
    VERTICAL_SPEED: 'VERTICAL_SPEED',
    VNAV: 'VNAV'
};

/**
 * Available values for `ModeController#autopilotMode`
 *
 * @memberof MCP_MODE
 * @property MCP_AUTOPILOT_MODES
 * @type {Object}
 * @final
 */
export const MCP_AUTOPILOT_MODES = {
    ON: 'ON',
    OFF: 'OFF'
};

/**
 * Available values for `ModeController#headingMode`
 *
 * @memberof MCP_MODE
 * @property MCP_HEADING_MODES
 * @type {Object}
 * @final
 */
export const MCP_HEADING_MODES = {
    HOLD: 'HOLD',
    LNAV: 'LNAV',
    OFF: 'OFF',
    VOR_LOC: 'VOR_LOC'
};

/**
 * Available values for `ModeController#speedMode`
 *
 * @memberof MCP_MODE
 * @property MCP_SPEED_MODES
 * @type {Object}
 * @final
 */
export const MCP_SPEED_MODES = {
    LEVEL_CHANGE: 'LEVEL_CHANGE',
    N1: 'N1',
    OFF: 'OFF',
    HOLD: 'HOLD',
    VNAV: 'VNAV'
};

/**
 * Available modes for `ModeController`
 *
 * @property MCP_MODE
 * @type {Object}
 * @final
 */
export const MCP_MODE = {
    ALTITUDE: MCP_ALTITUDE_MODES,
    AUTOPILOT: MCP_AUTOPILOT_MODES,
    HEADING: MCP_HEADING_MODES,
    SPEED: MCP_SPEED_MODES
};

/**
 *
 *
 * @property MCP_MODE_NAME
 * @type {Object}
 * @final
 */
export const MCP_MODE_NAME = {
    ALTITUDE: 'altitudeMode',
    AUTOPILOT: 'autopilotMode',
    HEADING: 'headingMode',
    SPEED: 'speedMode'
};

/**
 * Representation of the numerical values of the various dials on the MCP
 *
 * @property MCP_FIELDS
 * @type {Object}
 * @final
 */
export const MCP_FIELD_NAME = {
    ALTITUDE: 'altitude',
    COURSE: 'course',
    HEADING: 'heading',
    SPEED: 'speed'
};

/**
 * Provides a map from MCP_MODE_NAME to MCP_FIELD_NAME
 *
 * does not support `COURSE` and should be used only with
 * altitude, heading and speed (excluding `COURSE`)
 *
 * @property MCP_MODE_TO_FIELD_MAP
 * @type {Object}
 * @final
 */
export const MCP_MODE_TO_FIELD_MAP = {
    altitudeMode: 'altitude',
    headingMode: 'heading',
    speedMode: 'speed'
};