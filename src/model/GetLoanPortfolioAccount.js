

import ApiClient from '../ApiClient';

/**
 * The GetLoanPortfolioAccount model module.
 * @module model/GetLoanPortfolioAccount
 * @version 1.0
 */
class GetLoanPortfolioAccount {
    /**
     * Constructs a new <code>GetLoanPortfolioAccount</code>.
     * @alias module:model/GetLoanPortfolioAccount
     */
    constructor() { 
        
        GetLoanPortfolioAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanPortfolioAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanPortfolioAccount} obj Optional instance to populate.
     * @return {module:model/GetLoanPortfolioAccount} The populated <code>GetLoanPortfolioAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanPortfolioAccount();

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
GetLoanPortfolioAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanPortfolioAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetLoanPortfolioAccount.prototype['glCode'] = undefined;






export default GetLoanPortfolioAccount;

