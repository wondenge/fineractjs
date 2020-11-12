

import ApiClient from '../ApiClient';

/**
 * The PutSavingsAccountsChanges model module.
 * @module model/PutSavingsAccountsChanges
 * @version 1.0
 */
class PutSavingsAccountsChanges {
    /**
     * Constructs a new <code>PutSavingsAccountsChanges</code>.
     * @alias module:model/PutSavingsAccountsChanges
     */
    constructor() { 
        
        PutSavingsAccountsChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSavingsAccountsChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSavingsAccountsChanges} obj Optional instance to populate.
     * @return {module:model/PutSavingsAccountsChanges} The populated <code>PutSavingsAccountsChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSavingsAccountsChanges();

            if (data.hasOwnProperty('nominalAnnualInterestRate')) {
                obj['nominalAnnualInterestRate'] = ApiClient.convertToType(data['nominalAnnualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} nominalAnnualInterestRate
 */
PutSavingsAccountsChanges.prototype['nominalAnnualInterestRate'] = undefined;

/**
 * @member {String} locale
 */
PutSavingsAccountsChanges.prototype['locale'] = undefined;






export default PutSavingsAccountsChanges;

