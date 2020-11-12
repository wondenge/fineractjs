

import ApiClient from '../ApiClient';

/**
 * The GetSelfLoansTimeline model module.
 * @module model/GetSelfLoansTimeline
 * @version 1.0
 */
class GetSelfLoansTimeline {
    /**
     * Constructs a new <code>GetSelfLoansTimeline</code>.
     * @alias module:model/GetSelfLoansTimeline
     */
    constructor() { 
        
        GetSelfLoansTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfLoansTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfLoansTimeline} obj Optional instance to populate.
     * @return {module:model/GetSelfLoansTimeline} The populated <code>GetSelfLoansTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfLoansTimeline();

            if (data.hasOwnProperty('expectedDisbursementDate')) {
                obj['expectedDisbursementDate'] = ApiClient.convertToType(data['expectedDisbursementDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} expectedDisbursementDate
 */
GetSelfLoansTimeline.prototype['expectedDisbursementDate'] = undefined;






export default GetSelfLoansTimeline;

