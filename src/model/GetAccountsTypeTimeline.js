

import ApiClient from '../ApiClient';

/**
 * The GetAccountsTypeTimeline model module.
 * @module model/GetAccountsTypeTimeline
 * @version 1.0
 */
class GetAccountsTypeTimeline {
    /**
     * Constructs a new <code>GetAccountsTypeTimeline</code>.
     * @alias module:model/GetAccountsTypeTimeline
     */
    constructor() { 
        
        GetAccountsTypeTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsTypeTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsTypeTimeline} obj Optional instance to populate.
     * @return {module:model/GetAccountsTypeTimeline} The populated <code>GetAccountsTypeTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsTypeTimeline();

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
GetAccountsTypeTimeline.prototype['submittedOnDate'] = undefined;






export default GetAccountsTypeTimeline;

