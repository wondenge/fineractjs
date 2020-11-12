

import ApiClient from '../ApiClient';

/**
 * The GetClientsTimeline model module.
 * @module model/GetClientsTimeline
 * @version 1.0
 */
class GetClientsTimeline {
    /**
     * Constructs a new <code>GetClientsTimeline</code>.
     * @alias module:model/GetClientsTimeline
     */
    constructor() { 
        
        GetClientsTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsTimeline} obj Optional instance to populate.
     * @return {module:model/GetClientsTimeline} The populated <code>GetClientsTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsTimeline();

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
GetClientsTimeline.prototype['submittedOnDate'] = undefined;

/**
 * @member {String} submittedByUsername
 */
GetClientsTimeline.prototype['submittedByUsername'] = undefined;

/**
 * @member {String} submittedByFirstname
 */
GetClientsTimeline.prototype['submittedByFirstname'] = undefined;

/**
 * @member {String} submittedByLastname
 */
GetClientsTimeline.prototype['submittedByLastname'] = undefined;

/**
 * @member {Date} activatedOnDate
 */
GetClientsTimeline.prototype['activatedOnDate'] = undefined;

/**
 * @member {String} activatedByUsername
 */
GetClientsTimeline.prototype['activatedByUsername'] = undefined;

/**
 * @member {String} activatedByFirstname
 */
GetClientsTimeline.prototype['activatedByFirstname'] = undefined;

/**
 * @member {String} activatedByLastname
 */
GetClientsTimeline.prototype['activatedByLastname'] = undefined;






export default GetClientsTimeline;

