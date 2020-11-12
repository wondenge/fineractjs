

import ApiClient from '../ApiClient';

/**
 * The GetSelfLoansLoanIdTransactionsType model module.
 * @module model/GetSelfLoansLoanIdTransactionsType
 * @version 1.0
 */
class GetSelfLoansLoanIdTransactionsType {
    /**
     * Constructs a new <code>GetSelfLoansLoanIdTransactionsType</code>.
     * @alias module:model/GetSelfLoansLoanIdTransactionsType
     */
    constructor() { 
        
        GetSelfLoansLoanIdTransactionsType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfLoansLoanIdTransactionsType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfLoansLoanIdTransactionsType} obj Optional instance to populate.
     * @return {module:model/GetSelfLoansLoanIdTransactionsType} The populated <code>GetSelfLoansLoanIdTransactionsType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfLoansLoanIdTransactionsType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('disbursement')) {
                obj['disbursement'] = ApiClient.convertToType(data['disbursement'], 'Boolean');
            }
            if (data.hasOwnProperty('repaymentAtDisbursement')) {
                obj['repaymentAtDisbursement'] = ApiClient.convertToType(data['repaymentAtDisbursement'], 'Boolean');
            }
            if (data.hasOwnProperty('repayment')) {
                obj['repayment'] = ApiClient.convertToType(data['repayment'], 'Boolean');
            }
            if (data.hasOwnProperty('contra')) {
                obj['contra'] = ApiClient.convertToType(data['contra'], 'Boolean');
            }
            if (data.hasOwnProperty('waiveInterest')) {
                obj['waiveInterest'] = ApiClient.convertToType(data['waiveInterest'], 'Boolean');
            }
            if (data.hasOwnProperty('waiveCharges')) {
                obj['waiveCharges'] = ApiClient.convertToType(data['waiveCharges'], 'Boolean');
            }
            if (data.hasOwnProperty('writeOff')) {
                obj['writeOff'] = ApiClient.convertToType(data['writeOff'], 'Boolean');
            }
            if (data.hasOwnProperty('recoveryRepayment')) {
                obj['recoveryRepayment'] = ApiClient.convertToType(data['recoveryRepayment'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfLoansLoanIdTransactionsType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfLoansLoanIdTransactionsType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfLoansLoanIdTransactionsType.prototype['description'] = undefined;

/**
 * @member {Boolean} disbursement
 */
GetSelfLoansLoanIdTransactionsType.prototype['disbursement'] = undefined;

/**
 * @member {Boolean} repaymentAtDisbursement
 */
GetSelfLoansLoanIdTransactionsType.prototype['repaymentAtDisbursement'] = undefined;

/**
 * @member {Boolean} repayment
 */
GetSelfLoansLoanIdTransactionsType.prototype['repayment'] = undefined;

/**
 * @member {Boolean} contra
 */
GetSelfLoansLoanIdTransactionsType.prototype['contra'] = undefined;

/**
 * @member {Boolean} waiveInterest
 */
GetSelfLoansLoanIdTransactionsType.prototype['waiveInterest'] = undefined;

/**
 * @member {Boolean} waiveCharges
 */
GetSelfLoansLoanIdTransactionsType.prototype['waiveCharges'] = undefined;

/**
 * @member {Boolean} writeOff
 */
GetSelfLoansLoanIdTransactionsType.prototype['writeOff'] = undefined;

/**
 * @member {Boolean} recoveryRepayment
 */
GetSelfLoansLoanIdTransactionsType.prototype['recoveryRepayment'] = undefined;






export default GetSelfLoansLoanIdTransactionsType;

