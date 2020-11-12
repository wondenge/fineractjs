

import ApiClient from '../ApiClient';

/**
 * The GetSavingsTimeline model module.
 * @module model/GetSavingsTimeline
 * @version 1.0
 */
class GetSavingsTimeline {
    /**
     * Constructs a new <code>GetSavingsTimeline</code>.
     * @alias module:model/GetSavingsTimeline
     */
    constructor() { 
        
        GetSavingsTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsTimeline} obj Optional instance to populate.
     * @return {module:model/GetSavingsTimeline} The populated <code>GetSavingsTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsTimeline();

            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} submittedOnDate
 */
GetSavingsTimeline.prototype['submittedOnDate'] = undefined;






export default GetSavingsTimeline;

