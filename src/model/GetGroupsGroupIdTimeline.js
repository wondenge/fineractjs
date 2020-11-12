

import ApiClient from '../ApiClient';

/**
 * The GetGroupsGroupIdTimeline model module.
 * @module model/GetGroupsGroupIdTimeline
 * @version 1.0
 */
class GetGroupsGroupIdTimeline {
    /**
     * Constructs a new <code>GetGroupsGroupIdTimeline</code>.
     * @alias module:model/GetGroupsGroupIdTimeline
     */
    constructor() { 
        
        GetGroupsGroupIdTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdTimeline} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdTimeline} The populated <code>GetGroupsGroupIdTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdTimeline();

            if (data.hasOwnProperty('activatedOnDate')) {
                obj['activatedOnDate'] = ApiClient.convertToType(data['activatedOnDate'], 'Date');
            }
            if (data.hasOwnProperty('activatedByUsername')) {
                obj['activatedByUsername'] = ApiClient.convertToType(data['activatedByUsername'], 'String');
            }
            if (data.hasOwnProperty('activatedByFirstname')) {
                obj['activatedByFirstname'] = ApiClient.convertToType(data['activatedByFirstname'], 'String');
            }
            if (data.hasOwnProperty('activatedByLastname')) {
                obj['activatedByLastname'] = ApiClient.convertToType(data['activatedByLastname'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} activatedOnDate
 */
GetGroupsGroupIdTimeline.prototype['activatedOnDate'] = undefined;

/**
 * @member {String} activatedByUsername
 */
GetGroupsGroupIdTimeline.prototype['activatedByUsername'] = undefined;

/**
 * @member {String} activatedByFirstname
 */
GetGroupsGroupIdTimeline.prototype['activatedByFirstname'] = undefined;

/**
 * @member {String} activatedByLastname
 */
GetGroupsGroupIdTimeline.prototype['activatedByLastname'] = undefined;






export default GetGroupsGroupIdTimeline;

