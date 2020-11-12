

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdLinkedAccount model module.
 * @module model/GetLoansLoanIdLinkedAccount
 * @version 1.0
 */
class GetLoansLoanIdLinkedAccount {
    /**
     * Constructs a new <code>GetLoansLoanIdLinkedAccount</code>.
     * @alias module:model/GetLoansLoanIdLinkedAccount
     */
    constructor() { 
        
        GetLoansLoanIdLinkedAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdLinkedAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdLinkedAccount} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdLinkedAccount} The populated <code>GetLoansLoanIdLinkedAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdLinkedAccount();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoansLoanIdLinkedAccount.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetLoansLoanIdLinkedAccount.prototype['accountNo'] = undefined;






export default GetLoansLoanIdLinkedAccount;

