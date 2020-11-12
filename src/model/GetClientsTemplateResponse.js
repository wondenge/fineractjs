

import ApiClient from '../ApiClient';
import GetClientsDataTables from './GetClientsDataTables';
import GetClientsOfficeOptions from './GetClientsOfficeOptions';
import GetClientsSavingProductOptions from './GetClientsSavingProductOptions';
import GetClientsStaffOptions from './GetClientsStaffOptions';

/**
 * The GetClientsTemplateResponse model module.
 * @module model/GetClientsTemplateResponse
 * @version 1.0
 */
class GetClientsTemplateResponse {
    /**
     * Constructs a new <code>GetClientsTemplateResponse</code>.
     * GetClientsTemplateResponse
     * @alias module:model/GetClientsTemplateResponse
     */
    constructor() { 
        
        GetClientsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetClientsTemplateResponse} The populated <code>GetClientsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsTemplateResponse();

            if (data.hasOwnProperty('activationDate')) {
                obj['activationDate'] = ApiClient.convertToType(data['activationDate'], 'Date');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeOptions')) {
                obj['officeOptions'] = ApiClient.convertToType(data['officeOptions'], [GetClientsOfficeOptions]);
            }
            if (data.hasOwnProperty('staffOptions')) {
                obj['staffOptions'] = ApiClient.convertToType(data['staffOptions'], [GetClientsStaffOptions]);
            }
            if (data.hasOwnProperty('savingProductOptions')) {
                obj['savingProductOptions'] = ApiClient.convertToType(data['savingProductOptions'], [GetClientsSavingProductOptions]);
            }
            if (data.hasOwnProperty('datatables')) {
                obj['datatables'] = ApiClient.convertToType(data['datatables'], [GetClientsDataTables]);
            }
        }
        return obj;
    }


}

/**
 * @member {Date} activationDate
 */
GetClientsTemplateResponse.prototype['activationDate'] = undefined;

/**
 * @member {Number} officeId
 */
GetClientsTemplateResponse.prototype['officeId'] = undefined;

/**
 * @member {Array.<module:model/GetClientsOfficeOptions>} officeOptions
 */
GetClientsTemplateResponse.prototype['officeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetClientsStaffOptions>} staffOptions
 */
GetClientsTemplateResponse.prototype['staffOptions'] = undefined;

/**
 * @member {Array.<module:model/GetClientsSavingProductOptions>} savingProductOptions
 */
GetClientsTemplateResponse.prototype['savingProductOptions'] = undefined;

/**
 * @member {Array.<module:model/GetClientsDataTables>} datatables
 */
GetClientsTemplateResponse.prototype['datatables'] = undefined;






export default GetClientsTemplateResponse;

