

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsTimeline model module.
 * @module model/GetFixedDepositAccountsTimeline
 * @version 1.0
 */
class GetFixedDepositAccountsTimeline {
    /**
     * Constructs a new <code>GetFixedDepositAccountsTimeline</code>.
     * @alias module:model/GetFixedDepositAccountsTimeline
     */
    constructor() { 
        
        GetFixedDepositAccountsTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsTimeline} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsTimeline} The populated <code>GetFixedDepositAccountsTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsTimeline();

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
GetFixedDepositAccountsTimeline.prototype['submittedOnDate'] = undefined;

/**
 * @member {String} submittedByUsername
 */
GetFixedDepositAccountsTimeline.prototype['submittedByUsername'] = undefined;

/**
 * @member {String} submittedByFirstname
 */
GetFixedDepositAccountsTimeline.prototype['submittedByFirstname'] = undefined;

/**
 * @member {String} submittedByLastname
 */
GetFixedDepositAccountsTimeline.prototype['submittedByLastname'] = undefined;






export default GetFixedDepositAccountsTimeline;

