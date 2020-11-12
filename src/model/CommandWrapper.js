

import ApiClient from '../ApiClient';

/**
 * The CommandWrapper model module.
 * @module model/CommandWrapper
 * @version 1.0
 */
class CommandWrapper {
    /**
     * Constructs a new <code>CommandWrapper</code>.
     * @alias module:model/CommandWrapper
     */
    constructor() { 
        
        CommandWrapper.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommandWrapper</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommandWrapper} obj Optional instance to populate.
     * @return {module:model/CommandWrapper} The populated <code>CommandWrapper</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommandWrapper();

            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('loanId')) {
                obj['loanId'] = ApiClient.convertToType(data['loanId'], 'Number');
            }
            if (data.hasOwnProperty('savingsId')) {
                obj['savingsId'] = ApiClient.convertToType(data['savingsId'], 'Number');
            }
            if (data.hasOwnProperty('entityName')) {
                obj['entityName'] = ApiClient.convertToType(data['entityName'], 'String');
            }
            if (data.hasOwnProperty('taskPermissionName')) {
                obj['taskPermissionName'] = ApiClient.convertToType(data['taskPermissionName'], 'String');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'Number');
            }
            if (data.hasOwnProperty('subentityId')) {
                obj['subentityId'] = ApiClient.convertToType(data['subentityId'], 'Number');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('creditBureauId')) {
                obj['creditBureauId'] = ApiClient.convertToType(data['creditBureauId'], 'Number');
            }
            if (data.hasOwnProperty('organisationCreditBureauId')) {
                obj['organisationCreditBureauId'] = ApiClient.convertToType(data['organisationCreditBureauId'], 'Number');
            }
            if (data.hasOwnProperty('updateOperation')) {
                obj['updateOperation'] = ApiClient.convertToType(data['updateOperation'], 'Boolean');
            }
            if (data.hasOwnProperty('delete')) {
                obj['delete'] = ApiClient.convertToType(data['delete'], 'Boolean');
            }
            if (data.hasOwnProperty('deleteOperation')) {
                obj['deleteOperation'] = ApiClient.convertToType(data['deleteOperation'], 'Boolean');
            }
            if (data.hasOwnProperty('surveyResource')) {
                obj['surveyResource'] = ApiClient.convertToType(data['surveyResource'], 'Boolean');
            }
            if (data.hasOwnProperty('registerSurvey')) {
                obj['registerSurvey'] = ApiClient.convertToType(data['registerSurvey'], 'Boolean');
            }
            if (data.hasOwnProperty('fullFilSurvey')) {
                obj['fullFilSurvey'] = ApiClient.convertToType(data['fullFilSurvey'], 'Boolean');
            }
            if (data.hasOwnProperty('workingDaysResource')) {
                obj['workingDaysResource'] = ApiClient.convertToType(data['workingDaysResource'], 'Boolean');
            }
            if (data.hasOwnProperty('passwordPreferencesResource')) {
                obj['passwordPreferencesResource'] = ApiClient.convertToType(data['passwordPreferencesResource'], 'Boolean');
            }
            if (data.hasOwnProperty('permissionResource')) {
                obj['permissionResource'] = ApiClient.convertToType(data['permissionResource'], 'Boolean');
            }
            if (data.hasOwnProperty('userResource')) {
                obj['userResource'] = ApiClient.convertToType(data['userResource'], 'Boolean');
            }
            if (data.hasOwnProperty('currencyResource')) {
                obj['currencyResource'] = ApiClient.convertToType(data['currencyResource'], 'Boolean');
            }
            if (data.hasOwnProperty('loanDisburseDetailResource')) {
                obj['loanDisburseDetailResource'] = ApiClient.convertToType(data['loanDisburseDetailResource'], 'Boolean');
            }
            if (data.hasOwnProperty('updateDisbursementDate')) {
                obj['updateDisbursementDate'] = ApiClient.convertToType(data['updateDisbursementDate'], 'Boolean');
            }
            if (data.hasOwnProperty('create')) {
                obj['create'] = ApiClient.convertToType(data['create'], 'Boolean');
            }
            if (data.hasOwnProperty('createDatatable')) {
                obj['createDatatable'] = ApiClient.convertToType(data['createDatatable'], 'Boolean');
            }
            if (data.hasOwnProperty('deleteDatatable')) {
                obj['deleteDatatable'] = ApiClient.convertToType(data['deleteDatatable'], 'Boolean');
            }
            if (data.hasOwnProperty('updateDatatable')) {
                obj['updateDatatable'] = ApiClient.convertToType(data['updateDatatable'], 'Boolean');
            }
            if (data.hasOwnProperty('datatableResource')) {
                obj['datatableResource'] = ApiClient.convertToType(data['datatableResource'], 'Boolean');
            }
            if (data.hasOwnProperty('deleteOneToOne')) {
                obj['deleteOneToOne'] = ApiClient.convertToType(data['deleteOneToOne'], 'Boolean');
            }
            if (data.hasOwnProperty('deleteMultiple')) {
                obj['deleteMultiple'] = ApiClient.convertToType(data['deleteMultiple'], 'Boolean');
            }
            if (data.hasOwnProperty('updateOneToOne')) {
                obj['updateOneToOne'] = ApiClient.convertToType(data['updateOneToOne'], 'Boolean');
            }
            if (data.hasOwnProperty('updateMultiple')) {
                obj['updateMultiple'] = ApiClient.convertToType(data['updateMultiple'], 'Boolean');
            }
            if (data.hasOwnProperty('registerDatatable')) {
                obj['registerDatatable'] = ApiClient.convertToType(data['registerDatatable'], 'Boolean');
            }
            if (data.hasOwnProperty('noteResource')) {
                obj['noteResource'] = ApiClient.convertToType(data['noteResource'], 'Boolean');
            }
            if (data.hasOwnProperty('cacheResource')) {
                obj['cacheResource'] = ApiClient.convertToType(data['cacheResource'], 'Boolean');
            }
            if (data.hasOwnProperty('update')) {
                obj['update'] = ApiClient.convertToType(data['update'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} groupId
 */
CommandWrapper.prototype['groupId'] = undefined;

/**
 * @member {Number} clientId
 */
CommandWrapper.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
CommandWrapper.prototype['loanId'] = undefined;

/**
 * @member {Number} savingsId
 */
CommandWrapper.prototype['savingsId'] = undefined;

/**
 * @member {String} entityName
 */
CommandWrapper.prototype['entityName'] = undefined;

/**
 * @member {String} taskPermissionName
 */
CommandWrapper.prototype['taskPermissionName'] = undefined;

/**
 * @member {Number} entityId
 */
CommandWrapper.prototype['entityId'] = undefined;

/**
 * @member {Number} subentityId
 */
CommandWrapper.prototype['subentityId'] = undefined;

/**
 * @member {String} href
 */
CommandWrapper.prototype['href'] = undefined;

/**
 * @member {String} json
 */
CommandWrapper.prototype['json'] = undefined;

/**
 * @member {String} transactionId
 */
CommandWrapper.prototype['transactionId'] = undefined;

/**
 * @member {Number} productId
 */
CommandWrapper.prototype['productId'] = undefined;

/**
 * @member {Number} creditBureauId
 */
CommandWrapper.prototype['creditBureauId'] = undefined;

/**
 * @member {Number} organisationCreditBureauId
 */
CommandWrapper.prototype['organisationCreditBureauId'] = undefined;

/**
 * @member {Boolean} updateOperation
 */
CommandWrapper.prototype['updateOperation'] = undefined;

/**
 * @member {Boolean} delete
 */
CommandWrapper.prototype['delete'] = undefined;

/**
 * @member {Boolean} deleteOperation
 */
CommandWrapper.prototype['deleteOperation'] = undefined;

/**
 * @member {Boolean} surveyResource
 */
CommandWrapper.prototype['surveyResource'] = undefined;

/**
 * @member {Boolean} registerSurvey
 */
CommandWrapper.prototype['registerSurvey'] = undefined;

/**
 * @member {Boolean} fullFilSurvey
 */
CommandWrapper.prototype['fullFilSurvey'] = undefined;

/**
 * @member {Boolean} workingDaysResource
 */
CommandWrapper.prototype['workingDaysResource'] = undefined;

/**
 * @member {Boolean} passwordPreferencesResource
 */
CommandWrapper.prototype['passwordPreferencesResource'] = undefined;

/**
 * @member {Boolean} permissionResource
 */
CommandWrapper.prototype['permissionResource'] = undefined;

/**
 * @member {Boolean} userResource
 */
CommandWrapper.prototype['userResource'] = undefined;

/**
 * @member {Boolean} currencyResource
 */
CommandWrapper.prototype['currencyResource'] = undefined;

/**
 * @member {Boolean} loanDisburseDetailResource
 */
CommandWrapper.prototype['loanDisburseDetailResource'] = undefined;

/**
 * @member {Boolean} updateDisbursementDate
 */
CommandWrapper.prototype['updateDisbursementDate'] = undefined;

/**
 * @member {Boolean} create
 */
CommandWrapper.prototype['create'] = undefined;

/**
 * @member {Boolean} createDatatable
 */
CommandWrapper.prototype['createDatatable'] = undefined;

/**
 * @member {Boolean} deleteDatatable
 */
CommandWrapper.prototype['deleteDatatable'] = undefined;

/**
 * @member {Boolean} updateDatatable
 */
CommandWrapper.prototype['updateDatatable'] = undefined;

/**
 * @member {Boolean} datatableResource
 */
CommandWrapper.prototype['datatableResource'] = undefined;

/**
 * @member {Boolean} deleteOneToOne
 */
CommandWrapper.prototype['deleteOneToOne'] = undefined;

/**
 * @member {Boolean} deleteMultiple
 */
CommandWrapper.prototype['deleteMultiple'] = undefined;

/**
 * @member {Boolean} updateOneToOne
 */
CommandWrapper.prototype['updateOneToOne'] = undefined;

/**
 * @member {Boolean} updateMultiple
 */
CommandWrapper.prototype['updateMultiple'] = undefined;

/**
 * @member {Boolean} registerDatatable
 */
CommandWrapper.prototype['registerDatatable'] = undefined;

/**
 * @member {Boolean} noteResource
 */
CommandWrapper.prototype['noteResource'] = undefined;

/**
 * @member {Boolean} cacheResource
 */
CommandWrapper.prototype['cacheResource'] = undefined;

/**
 * @member {Boolean} update
 */
CommandWrapper.prototype['update'] = undefined;






export default CommandWrapper;

