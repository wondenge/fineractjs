

import ApiClient from '../ApiClient';
import GetSavingsProductsFundSourceAccount from './GetSavingsProductsFundSourceAccount';
import GetSavingsProductsPaymentType from './GetSavingsProductsPaymentType';

/**
 * The GetSavingsProductsPaymentChannelToFundSourceMappings model module.
 * @module model/GetSavingsProductsPaymentChannelToFundSourceMappings
 * @version 1.0
 */
class GetSavingsProductsPaymentChannelToFundSourceMappings {
    /**
     * Constructs a new <code>GetSavingsProductsPaymentChannelToFundSourceMappings</code>.
     * @alias module:model/GetSavingsProductsPaymentChannelToFundSourceMappings
     */
    constructor() { 
        
        GetSavingsProductsPaymentChannelToFundSourceMappings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsPaymentChannelToFundSourceMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsPaymentChannelToFundSourceMappings} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsPaymentChannelToFundSourceMappings} The populated <code>GetSavingsProductsPaymentChannelToFundSourceMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsPaymentChannelToFundSourceMappings();

            if (data.hasOwnProperty('paymentType')) {
                obj['paymentType'] = GetSavingsProductsPaymentType.constructFromObject(data['paymentType']);
            }
            if (data.hasOwnProperty('fundSourceAccount')) {
                obj['fundSourceAccount'] = GetSavingsProductsFundSourceAccount.constructFromObject(data['fundSourceAccount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetSavingsProductsPaymentType} paymentType
 */
GetSavingsProductsPaymentChannelToFundSourceMappings.prototype['paymentType'] = undefined;

/**
 * @member {module:model/GetSavingsProductsFundSourceAccount} fundSourceAccount
 */
GetSavingsProductsPaymentChannelToFundSourceMappings.prototype['fundSourceAccount'] = undefined;






export default GetSavingsProductsPaymentChannelToFundSourceMappings;

