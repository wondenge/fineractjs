

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsDepositPeriodFrequency model module.
 * @module model/GetFixedDepositAccountsDepositPeriodFrequency
 * @version 1.0
 */
class GetFixedDepositAccountsDepositPeriodFrequency {
    /**
     * Constructs a new <code>GetFixedDepositAccountsDepositPeriodFrequency</code>.
     * @alias module:model/GetFixedDepositAccountsDepositPeriodFrequency
     */
    constructor() { 
        
        GetFixedDepositAccountsDepositPeriodFrequency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsDepositPeriodFrequency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsDepositPeriodFrequency} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsDepositPeriodFrequency} The populated <code>GetFixedDepositAccountsDepositPeriodFrequency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsDepositPeriodFrequency();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFixedDepositAccountsDepositPeriodFrequency.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositAccountsDepositPeriodFrequency.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositAccountsDepositPeriodFrequency.prototype['description'] = undefined;






export default GetFixedDepositAccountsDepositPeriodFrequency;

