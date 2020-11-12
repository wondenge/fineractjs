

import ApiClient from '../ApiClient';

/**
 * The LoanProductProvisioningEntryData model module.
 * @module model/LoanProductProvisioningEntryData
 * @version 1.0
 */
class LoanProductProvisioningEntryData {
    /**
     * Constructs a new <code>LoanProductProvisioningEntryData</code>.
     * @alias module:model/LoanProductProvisioningEntryData
     */
    constructor() { 
        
        LoanProductProvisioningEntryData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanProductProvisioningEntryData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanProductProvisioningEntryData} obj Optional instance to populate.
     * @return {module:model/LoanProductProvisioningEntryData} The populated <code>LoanProductProvisioningEntryData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanProductProvisioningEntryData();

            if (data.hasOwnProperty('historyId')) {
                obj['historyId'] = ApiClient.convertToType(data['historyId'], 'Number');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('categoryId')) {
                obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'Number');
            }
            if (data.hasOwnProperty('overdueInDays')) {
                obj['overdueInDays'] = ApiClient.convertToType(data['overdueInDays'], 'Number');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('liablityAccount')) {
                obj['liablityAccount'] = ApiClient.convertToType(data['liablityAccount'], 'Number');
            }
            if (data.hasOwnProperty('expenseAccount')) {
                obj['expenseAccount'] = ApiClient.convertToType(data['expenseAccount'], 'Number');
            }
            if (data.hasOwnProperty('criteriaId')) {
                obj['criteriaId'] = ApiClient.convertToType(data['criteriaId'], 'Number');
            }
            if (data.hasOwnProperty('outstandingBalance')) {
                obj['outstandingBalance'] = ApiClient.convertToType(data['outstandingBalance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} historyId
 */
LoanProductProvisioningEntryData.prototype['historyId'] = undefined;

/**
 * @member {Number} officeId
 */
LoanProductProvisioningEntryData.prototype['officeId'] = undefined;

/**
 * @member {String} currencyCode
 */
LoanProductProvisioningEntryData.prototype['currencyCode'] = undefined;

/**
 * @member {Number} productId
 */
LoanProductProvisioningEntryData.prototype['productId'] = undefined;

/**
 * @member {Number} categoryId
 */
LoanProductProvisioningEntryData.prototype['categoryId'] = undefined;

/**
 * @member {Number} overdueInDays
 */
LoanProductProvisioningEntryData.prototype['overdueInDays'] = undefined;

/**
 * @member {Number} percentage
 */
LoanProductProvisioningEntryData.prototype['percentage'] = undefined;

/**
 * @member {Number} liablityAccount
 */
LoanProductProvisioningEntryData.prototype['liablityAccount'] = undefined;

/**
 * @member {Number} expenseAccount
 */
LoanProductProvisioningEntryData.prototype['expenseAccount'] = undefined;

/**
 * @member {Number} criteriaId
 */
LoanProductProvisioningEntryData.prototype['criteriaId'] = undefined;

/**
 * @member {Number} outstandingBalance
 */
LoanProductProvisioningEntryData.prototype['outstandingBalance'] = undefined;






export default LoanProductProvisioningEntryData;

