

import ApiClient from '../ApiClient';
import GetLoanFundSourceAccount from './GetLoanFundSourceAccount';
import GetLoanPaymentType from './GetLoanPaymentType';

/**
 * The GetLoanPaymentChannelToFundSourceMappings model module.
 * @module model/GetLoanPaymentChannelToFundSourceMappings
 * @version 1.0
 */
class GetLoanPaymentChannelToFundSourceMappings {
    /**
     * Constructs a new <code>GetLoanPaymentChannelToFundSourceMappings</code>.
     * @alias module:model/GetLoanPaymentChannelToFundSourceMappings
     */
    constructor() { 
        
        GetLoanPaymentChannelToFundSourceMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanPaymentChannelToFundSourceMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanPaymentChannelToFundSourceMappings} obj Optional instance to populate.
     * @return {module:model/GetLoanPaymentChannelToFundSourceMappings} The populated <code>GetLoanPaymentChannelToFundSourceMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanPaymentChannelToFundSourceMappings();

            if (data.hasOwnProperty('paymentType')) {
                obj['paymentType'] = GetLoanPaymentType.constructFromObject(data['paymentType']);
            }
            if (data.hasOwnProperty('fundSourceAccount')) {
                obj['fundSourceAccount'] = GetLoanFundSourceAccount.constructFromObject(data['fundSourceAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetLoanPaymentType} paymentType
 */
GetLoanPaymentChannelToFundSourceMappings.prototype['paymentType'] = undefined;

/**
 * @member {module:model/GetLoanFundSourceAccount} fundSourceAccount
 */
GetLoanPaymentChannelToFundSourceMappings.prototype['fundSourceAccount'] = undefined;






export default GetLoanPaymentChannelToFundSourceMappings;

