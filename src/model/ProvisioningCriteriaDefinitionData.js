

import ApiClient from '../ApiClient';

/**
 * The ProvisioningCriteriaDefinitionData model module.
 * @module model/ProvisioningCriteriaDefinitionData
 * @version 1.0
 */
class ProvisioningCriteriaDefinitionData {
    /**
     * Constructs a new <code>ProvisioningCriteriaDefinitionData</code>.
     * @alias module:model/ProvisioningCriteriaDefinitionData
     */
    constructor() { 
        
        ProvisioningCriteriaDefinitionData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProvisioningCriteriaDefinitionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProvisioningCriteriaDefinitionData} obj Optional instance to populate.
     * @return {module:model/ProvisioningCriteriaDefinitionData} The populated <code>ProvisioningCriteriaDefinitionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProvisioningCriteriaDefinitionData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('categoryId')) {
                obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'Number');
            }
            if (data.hasOwnProperty('categoryName')) {
                obj['categoryName'] = ApiClient.convertToType(data['categoryName'], 'String');
            }
            if (data.hasOwnProperty('minAge')) {
                obj['minAge'] = ApiClient.convertToType(data['minAge'], 'Number');
            }
            if (data.hasOwnProperty('maxAge')) {
                obj['maxAge'] = ApiClient.convertToType(data['maxAge'], 'Number');
            }
            if (data.hasOwnProperty('provisioningPercentage')) {
                obj['provisioningPercentage'] = ApiClient.convertToType(data['provisioningPercentage'], 'Number');
            }
            if (data.hasOwnProperty('liabilityAccount')) {
                obj['liabilityAccount'] = ApiClient.convertToType(data['liabilityAccount'], 'Number');
            }
            if (data.hasOwnProperty('liabilityCode')) {
                obj['liabilityCode'] = ApiClient.convertToType(data['liabilityCode'], 'String');
            }
            if (data.hasOwnProperty('expenseAccount')) {
                obj['expenseAccount'] = ApiClient.convertToType(data['expenseAccount'], 'Number');
            }
            if (data.hasOwnProperty('expenseCode')) {
                obj['expenseCode'] = ApiClient.convertToType(data['expenseCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ProvisioningCriteriaDefinitionData.prototype['id'] = undefined;

/**
 * @member {Number} categoryId
 */
ProvisioningCriteriaDefinitionData.prototype['categoryId'] = undefined;

/**
 * @member {String} categoryName
 */
ProvisioningCriteriaDefinitionData.prototype['categoryName'] = undefined;

/**
 * @member {Number} minAge
 */
ProvisioningCriteriaDefinitionData.prototype['minAge'] = undefined;

/**
 * @member {Number} maxAge
 */
ProvisioningCriteriaDefinitionData.prototype['maxAge'] = undefined;

/**
 * @member {Number} provisioningPercentage
 */
ProvisioningCriteriaDefinitionData.prototype['provisioningPercentage'] = undefined;

/**
 * @member {Number} liabilityAccount
 */
ProvisioningCriteriaDefinitionData.prototype['liabilityAccount'] = undefined;

/**
 * @member {String} liabilityCode
 */
ProvisioningCriteriaDefinitionData.prototype['liabilityCode'] = undefined;

/**
 * @member {Number} expenseAccount
 */
ProvisioningCriteriaDefinitionData.prototype['expenseAccount'] = undefined;

/**
 * @member {String} expenseCode
 */
ProvisioningCriteriaDefinitionData.prototype['expenseCode'] = undefined;






export default ProvisioningCriteriaDefinitionData;

