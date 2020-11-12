

import ApiClient from '../ApiClient';

/**
 * The GetCentersTimeline model module.
 * @module model/GetCentersTimeline
 * @version 1.0
 */
class GetCentersTimeline {
    /**
     * Constructs a new <code>GetCentersTimeline</code>.
     * @alias module:model/GetCentersTimeline
     */
    constructor() { 
        
        GetCentersTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCentersTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCentersTimeline} obj Optional instance to populate.
     * @return {module:model/GetCentersTimeline} The populated <code>GetCentersTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCentersTimeline();

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
        }
        return obj;
    }


}

/**
 * @member {Date} submittedOnDate
 */
GetCentersTimeline.prototype['submittedOnDate'] = undefined;

/**
 * @member {String} submittedByUsername
 */
GetCentersTimeline.prototype['submittedByUsername'] = undefined;

/**
 * @member {String} submittedByFirstname
 */
GetCentersTimeline.prototype['submittedByFirstname'] = undefined;

/**
 * @member {String} submittedByLastname
 */
GetCentersTimeline.prototype['submittedByLastname'] = undefined;






export default GetCentersTimeline;

