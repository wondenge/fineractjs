

import ApiClient from '../ApiClient';

/**
 * The GetLoanIncomeFromFeeAccount model module.
 * @module model/GetLoanIncomeFromFeeAccount
 * @version 1.0
 */
class GetLoanIncomeFromFeeAccount {
    /**
     * Constructs a new <code>GetLoanIncomeFromFeeAccount</code>.
     * @alias module:model/GetLoanIncomeFromFeeAccount
     */
    constructor() { 
        
        GetLoanIncomeFromFeeAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanIncomeFromFeeAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanIncomeFromFeeAccount} obj Optional instance to populate.
     * @return {module:model/GetLoanIncomeFromFeeAccount} The populated <code>GetLoanIncomeFromFeeAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanIncomeFromFeeAccount();

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
GetLoanIncomeFromFeeAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanIncomeFromFeeAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetLoanIncomeFromFeeAccount.prototype['glCode'] = undefined;






export default GetLoanIncomeFromFeeAccount;

