

import ApiClient from '../ApiClient';

/**
 * The GetLoanInterestOnLoanAccount model module.
 * @module model/GetLoanInterestOnLoanAccount
 * @version 1.0
 */
class GetLoanInterestOnLoanAccount {
    /**
     * Constructs a new <code>GetLoanInterestOnLoanAccount</code>.
     * @alias module:model/GetLoanInterestOnLoanAccount
     */
    constructor() { 
        
        GetLoanInterestOnLoanAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanInterestOnLoanAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanInterestOnLoanAccount} obj Optional instance to populate.
     * @return {module:model/GetLoanInterestOnLoanAccount} The populated <code>GetLoanInterestOnLoanAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanInterestOnLoanAccount();

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
GetLoanInterestOnLoanAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanInterestOnLoanAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetLoanInterestOnLoanAccount.prototype['glCode'] = undefined;






export default GetLoanInterestOnLoanAccount;

