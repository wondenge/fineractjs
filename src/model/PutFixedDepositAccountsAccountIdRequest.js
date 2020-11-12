

import ApiClient from '../ApiClient';

/**
 * The PutFixedDepositAccountsAccountIdRequest model module.
 * @module model/PutFixedDepositAccountsAccountIdRequest
 * @version 1.0
 */
class PutFixedDepositAccountsAccountIdRequest {
    /**
     * Constructs a new <code>PutFixedDepositAccountsAccountIdRequest</code>.
     * PutFixedDepositAccountsAccountIdRequest
     * @alias module:model/PutFixedDepositAccountsAccountIdRequest
     */
    constructor() { 
        
        PutFixedDepositAccountsAccountIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFixedDepositAccountsAccountIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFixedDepositAccountsAccountIdRequest} obj Optional instance to populate.
     * @return {module:model/PutFixedDepositAccountsAccountIdRequest} The populated <code>PutFixedDepositAccountsAccountIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFixedDepositAccountsAccountIdRequest();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('depositAmount')) {
                obj['depositAmount'] = ApiClient.convertToType(data['depositAmount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PutFixedDepositAccountsAccountIdRequest.prototype['locale'] = undefined;

/**
 * @member {Number} depositAmount
 */
PutFixedDepositAccountsAccountIdRequest.prototype['depositAmount'] = undefined;






export default PutFixedDepositAccountsAccountIdRequest;

