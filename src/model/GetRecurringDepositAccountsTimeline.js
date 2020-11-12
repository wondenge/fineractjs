

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositAccountsTimeline model module.
 * @module model/GetRecurringDepositAccountsTimeline
 * @version 1.0
 */
class GetRecurringDepositAccountsTimeline {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsTimeline</code>.
     * @alias module:model/GetRecurringDepositAccountsTimeline
     */
    constructor() { 
        
        GetRecurringDepositAccountsTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsTimeline} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsTimeline} The populated <code>GetRecurringDepositAccountsTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsTimeline();

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
GetRecurringDepositAccountsTimeline.prototype['submittedOnDate'] = undefined;

/**
 * @member {String} submittedByUsername
 */
GetRecurringDepositAccountsTimeline.prototype['submittedByUsername'] = undefined;

/**
 * @member {String} submittedByFirstname
 */
GetRecurringDepositAccountsTimeline.prototype['submittedByFirstname'] = undefined;

/**
 * @member {String} submittedByLastname
 */
GetRecurringDepositAccountsTimeline.prototype['submittedByLastname'] = undefined;






export default GetRecurringDepositAccountsTimeline;

