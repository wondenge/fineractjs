

import ApiClient from '../ApiClient';

/**
 * The GetLoansType model module.
 * @module model/GetLoansType
 * @version 1.0
 */
class GetLoansType {
    /**
     * Constructs a new <code>GetLoansType</code>.
     * @alias module:model/GetLoansType
     */
    constructor() { 
        
        GetLoansType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansType} obj Optional instance to populate.
     * @return {module:model/GetLoansType} The populated <code>GetLoansType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansType();

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
GetLoansType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansType.prototype['description'] = undefined;

/**
 * @member {Boolean} disbursement
 */
GetLoansType.prototype['disbursement'] = undefined;

/**
 * @member {Boolean} repaymentAtDisbursement
 */
GetLoansType.prototype['repaymentAtDisbursement'] = undefined;

/**
 * @member {Boolean} repayment
 */
GetLoansType.prototype['repayment'] = undefined;

/**
 * @member {Boolean} contra
 */
GetLoansType.prototype['contra'] = undefined;

/**
 * @member {Boolean} waiveInterest
 */
GetLoansType.prototype['waiveInterest'] = undefined;

/**
 * @member {Boolean} waiveCharges
 */
GetLoansType.prototype['waiveCharges'] = undefined;

/**
 * @member {Boolean} writeOff
 */
GetLoansType.prototype['writeOff'] = undefined;

/**
 * @member {Boolean} recoveryRepayment
 */
GetLoansType.prototype['recoveryRepayment'] = undefined;






export default GetLoansType;

