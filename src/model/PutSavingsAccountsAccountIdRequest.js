

import ApiClient from '../ApiClient';

/**
 * The PutSavingsAccountsAccountIdRequest model module.
 * @module model/PutSavingsAccountsAccountIdRequest
 * @version 1.0
 */
class PutSavingsAccountsAccountIdRequest {
    /**
     * Constructs a new <code>PutSavingsAccountsAccountIdRequest</code>.
     * PutSavingsAccountsAccountIdRequest
     * @alias module:model/PutSavingsAccountsAccountIdRequest
     */
    constructor() { 
        
        PutSavingsAccountsAccountIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSavingsAccountsAccountIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSavingsAccountsAccountIdRequest} obj Optional instance to populate.
     * @return {module:model/PutSavingsAccountsAccountIdRequest} The populated <code>PutSavingsAccountsAccountIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSavingsAccountsAccountIdRequest();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('nominalAnnualInterestRate')) {
                obj['nominalAnnualInterestRate'] = ApiClient.convertToType(data['nominalAnnualInterestRate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PutSavingsAccountsAccountIdRequest.prototype['locale'] = undefined;

/**
 * @member {Number} nominalAnnualInterestRate
 */
PutSavingsAccountsAccountIdRequest.prototype['nominalAnnualInterestRate'] = undefined;






export default PutSavingsAccountsAccountIdRequest;

