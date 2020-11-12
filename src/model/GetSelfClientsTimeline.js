

import ApiClient from '../ApiClient';

/**
 * The GetSelfClientsTimeline model module.
 * @module model/GetSelfClientsTimeline
 * @version 1.0
 */
class GetSelfClientsTimeline {
    /**
     * Constructs a new <code>GetSelfClientsTimeline</code>.
     * @alias module:model/GetSelfClientsTimeline
     */
    constructor() { 
        
        GetSelfClientsTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsTimeline} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsTimeline} The populated <code>GetSelfClientsTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsTimeline();

            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'Date');
            }
            if (data.hasOwnProperty('submittedByUsername')) {
                obj['submittedByUsername'] = ApiClient.convertToType(data['submittedByUsername'], 'String');
            }
            if (data.hasOwnProperty('submittedByFirstname')) {
                obj['submittedByFirstname'] = ApiClient.convertToType(data['submittedByFirstname'], 'String');
            }
            if (data.hasOwnProperty('submittedByLastname')) {
                obj['submittedByLastname'] = ApiClient.convertToType(data['submittedByLastname'], 'String');
            }
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
 * @member {Date} submittedOnDate
 */
GetSelfClientsTimeline.prototype['submittedOnDate'] = undefined;

/**
 * @member {String} submittedByUsername
 */
GetSelfClientsTimeline.prototype['submittedByUsername'] = undefined;

/**
 * @member {String} submittedByFirstname
 */
GetSelfClientsTimeline.prototype['submittedByFirstname'] = undefined;

/**
 * @member {String} submittedByLastname
 */
GetSelfClientsTimeline.prototype['submittedByLastname'] = undefined;

/**
 * @member {Date} activatedOnDate
 */
GetSelfClientsTimeline.prototype['activatedOnDate'] = undefined;

/**
 * @member {String} activatedByUsername
 */
GetSelfClientsTimeline.prototype['activatedByUsername'] = undefined;

/**
 * @member {String} activatedByFirstname
 */
GetSelfClientsTimeline.prototype['activatedByFirstname'] = undefined;

/**
 * @member {String} activatedByLastname
 */
GetSelfClientsTimeline.prototype['activatedByLastname'] = undefined;






export default GetSelfClientsTimeline;

