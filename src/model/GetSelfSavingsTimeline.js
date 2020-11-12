

import ApiClient from '../ApiClient';

/**
 * The GetSelfSavingsTimeline model module.
 * @module model/GetSelfSavingsTimeline
 * @version 1.0
 */
class GetSelfSavingsTimeline {
    /**
     * Constructs a new <code>GetSelfSavingsTimeline</code>.
     * @alias module:model/GetSelfSavingsTimeline
     */
    constructor() { 
        
        GetSelfSavingsTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsTimeline} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsTimeline} The populated <code>GetSelfSavingsTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsTimeline();

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
GetSelfSavingsTimeline.prototype['submittedOnDate'] = undefined;






export default GetSelfSavingsTimeline;

