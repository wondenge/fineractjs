

import ApiClient from '../ApiClient';

/**
 * The GetLoansTemplateTimeline model module.
 * @module model/GetLoansTemplateTimeline
 * @version 1.0
 */
class GetLoansTemplateTimeline {
    /**
     * Constructs a new <code>GetLoansTemplateTimeline</code>.
     * @alias module:model/GetLoansTemplateTimeline
     */
    constructor() { 
        
        GetLoansTemplateTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansTemplateTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansTemplateTimeline} obj Optional instance to populate.
     * @return {module:model/GetLoansTemplateTimeline} The populated <code>GetLoansTemplateTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansTemplateTimeline();

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
GetLoansTemplateTimeline.prototype['expectedDisbursementDate'] = undefined;






export default GetLoansTemplateTimeline;

