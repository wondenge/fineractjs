

import ApiClient from '../ApiClient';

/**
 * The GetLoanOverpaymentLiabilityAccount model module.
 * @module model/GetLoanOverpaymentLiabilityAccount
 * @version 1.0
 */
class GetLoanOverpaymentLiabilityAccount {
    /**
     * Constructs a new <code>GetLoanOverpaymentLiabilityAccount</code>.
     * @alias module:model/GetLoanOverpaymentLiabilityAccount
     */
    constructor() { 
        
        GetLoanOverpaymentLiabilityAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanOverpaymentLiabilityAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanOverpaymentLiabilityAccount} obj Optional instance to populate.
     * @return {module:model/GetLoanOverpaymentLiabilityAccount} The populated <code>GetLoanOverpaymentLiabilityAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanOverpaymentLiabilityAccount();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanOverpaymentLiabilityAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanOverpaymentLiabilityAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetLoanOverpaymentLiabilityAccount.prototype['glCode'] = undefined;






export default GetLoanOverpaymentLiabilityAccount;

