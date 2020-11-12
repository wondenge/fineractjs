

import ApiClient from '../ApiClient';

/**
 * The GetLoanIncomeFromPenaltyAccount model module.
 * @module model/GetLoanIncomeFromPenaltyAccount
 * @version 1.0
 */
class GetLoanIncomeFromPenaltyAccount {
    /**
     * Constructs a new <code>GetLoanIncomeFromPenaltyAccount</code>.
     * @alias module:model/GetLoanIncomeFromPenaltyAccount
     */
    constructor() { 
        
        GetLoanIncomeFromPenaltyAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanIncomeFromPenaltyAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanIncomeFromPenaltyAccount} obj Optional instance to populate.
     * @return {module:model/GetLoanIncomeFromPenaltyAccount} The populated <code>GetLoanIncomeFromPenaltyAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanIncomeFromPenaltyAccount();

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
GetLoanIncomeFromPenaltyAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanIncomeFromPenaltyAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetLoanIncomeFromPenaltyAccount.prototype['glCode'] = undefined;






export default GetLoanIncomeFromPenaltyAccount;

