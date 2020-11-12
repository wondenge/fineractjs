

import ApiClient from '../ApiClient';

/**
 * The PutFinancialActivityAccountscommentsSwagger model module.
 * @module model/PutFinancialActivityAccountscommentsSwagger
 * @version 1.0
 */
class PutFinancialActivityAccountscommentsSwagger {
    /**
     * Constructs a new <code>PutFinancialActivityAccountscommentsSwagger</code>.
     * @alias module:model/PutFinancialActivityAccountscommentsSwagger
     */
    constructor() { 
        
        PutFinancialActivityAccountscommentsSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFinancialActivityAccountscommentsSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFinancialActivityAccountscommentsSwagger} obj Optional instance to populate.
     * @return {module:model/PutFinancialActivityAccountscommentsSwagger} The populated <code>PutFinancialActivityAccountscommentsSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFinancialActivityAccountscommentsSwagger();

            if (data.hasOwnProperty('glAccountId')) {
                obj['glAccountId'] = ApiClient.convertToType(data['glAccountId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} glAccountId
 */
PutFinancialActivityAccountscommentsSwagger.prototype['glAccountId'] = undefined;






export default PutFinancialActivityAccountscommentsSwagger;

