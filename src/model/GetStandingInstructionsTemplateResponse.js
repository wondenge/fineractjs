

import ApiClient from '../ApiClient';
import GetFromAccountTypeOptionsResponseStandingInstructionSwagger from './GetFromAccountTypeOptionsResponseStandingInstructionSwagger';
import GetFromAccountTypeResponseStandingInstructionSwagger from './GetFromAccountTypeResponseStandingInstructionSwagger';
import GetFromClientOptionsResponseStandingInstructionSwagger from './GetFromClientOptionsResponseStandingInstructionSwagger';
import GetFromOfficeOptionsResponseStandingInstructionSwagger from './GetFromOfficeOptionsResponseStandingInstructionSwagger';
import GetFromOfficeResponseStandingInstructionSwagger from './GetFromOfficeResponseStandingInstructionSwagger';
import GetInstructionTypeOptionsResponseStandingInstructionSwagger from './GetInstructionTypeOptionsResponseStandingInstructionSwagger';
import GetPriorityOptionsResponseStandingInstructionSwagger from './GetPriorityOptionsResponseStandingInstructionSwagger';
import GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger from './GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger';
import GetRecurrenceTypeOptionsResponseStandingInstructionSwagger from './GetRecurrenceTypeOptionsResponseStandingInstructionSwagger';
import GetStatusOptionsResponseStandingInstructionSwagger from './GetStatusOptionsResponseStandingInstructionSwagger';
import GetToAccountTypeOptionsResponseStandingInstructionSwagger from './GetToAccountTypeOptionsResponseStandingInstructionSwagger';
import GetToOfficeOptionsResponseStandingInstructionSwagger from './GetToOfficeOptionsResponseStandingInstructionSwagger';
import GetTransferTypeOptionsResponseStandingInstructionSwagger from './GetTransferTypeOptionsResponseStandingInstructionSwagger';

/**
 * The GetStandingInstructionsTemplateResponse model module.
 * @module model/GetStandingInstructionsTemplateResponse
 * @version 1.0
 */
class GetStandingInstructionsTemplateResponse {
    /**
     * Constructs a new <code>GetStandingInstructionsTemplateResponse</code>.
     * GetStandingInstructionsTemplateResponse
     * @alias module:model/GetStandingInstructionsTemplateResponse
     */
    constructor() { 
        
        GetStandingInstructionsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStandingInstructionsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStandingInstructionsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetStandingInstructionsTemplateResponse} The populated <code>GetStandingInstructionsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStandingInstructionsTemplateResponse();

            if (data.hasOwnProperty('fromOffice')) {
                obj['fromOffice'] = GetFromOfficeResponseStandingInstructionSwagger.constructFromObject(data['fromOffice']);
            }
            if (data.hasOwnProperty('fromAccountType')) {
                obj['fromAccountType'] = GetFromAccountTypeResponseStandingInstructionSwagger.constructFromObject(data['fromAccountType']);
            }
            if (data.hasOwnProperty('fromOfficeOptions')) {
                obj['fromOfficeOptions'] = ApiClient.convertToType(data['fromOfficeOptions'], [GetFromOfficeOptionsResponseStandingInstructionSwagger]);
            }
            if (data.hasOwnProperty('fromClientOptions')) {
                obj['fromClientOptions'] = ApiClient.convertToType(data['fromClientOptions'], [GetFromClientOptionsResponseStandingInstructionSwagger]);
            }
            if (data.hasOwnProperty('fromAccountTypeOptions')) {
                obj['fromAccountTypeOptions'] = ApiClient.convertToType(data['fromAccountTypeOptions'], [GetFromAccountTypeOptionsResponseStandingInstructionSwagger]);
            }
            if (data.hasOwnProperty('toOfficeOptions')) {
                obj['toOfficeOptions'] = ApiClient.convertToType(data['toOfficeOptions'], [GetToOfficeOptionsResponseStandingInstructionSwagger]);
            }
            if (data.hasOwnProperty('toAccountTypeOptions')) {
                obj['toAccountTypeOptions'] = ApiClient.convertToType(data['toAccountTypeOptions'], [GetToAccountTypeOptionsResponseStandingInstructionSwagger]);
            }
            if (data.hasOwnProperty('transferTypeOptions')) {
                obj['transferTypeOptions'] = ApiClient.convertToType(data['transferTypeOptions'], [GetTransferTypeOptionsResponseStandingInstructionSwagger]);
            }
            if (data.hasOwnProperty('statusOptions')) {
                obj['statusOptions'] = ApiClient.convertToType(data['statusOptions'], [GetStatusOptionsResponseStandingInstructionSwagger]);
            }
            if (data.hasOwnProperty('instructionTypeOptions')) {
                obj['instructionTypeOptions'] = ApiClient.convertToType(data['instructionTypeOptions'], [GetInstructionTypeOptionsResponseStandingInstructionSwagger]);
            }
            if (data.hasOwnProperty('priorityOptions')) {
                obj['priorityOptions'] = ApiClient.convertToType(data['priorityOptions'], [GetPriorityOptionsResponseStandingInstructionSwagger]);
            }
            if (data.hasOwnProperty('recurrenceTypeOptions')) {
                obj['recurrenceTypeOptions'] = ApiClient.convertToType(data['recurrenceTypeOptions'], [GetRecurrenceTypeOptionsResponseStandingInstructionSwagger]);
            }
            if (data.hasOwnProperty('recurrenceFrequencyOptions')) {
                obj['recurrenceFrequencyOptions'] = ApiClient.convertToType(data['recurrenceFrequencyOptions'], [GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetFromOfficeResponseStandingInstructionSwagger} fromOffice
 */
GetStandingInstructionsTemplateResponse.prototype['fromOffice'] = undefined;

/**
 * @member {module:model/GetFromAccountTypeResponseStandingInstructionSwagger} fromAccountType
 */
GetStandingInstructionsTemplateResponse.prototype['fromAccountType'] = undefined;

/**
 * @member {Array.<module:model/GetFromOfficeOptionsResponseStandingInstructionSwagger>} fromOfficeOptions
 */
GetStandingInstructionsTemplateResponse.prototype['fromOfficeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetFromClientOptionsResponseStandingInstructionSwagger>} fromClientOptions
 */
GetStandingInstructionsTemplateResponse.prototype['fromClientOptions'] = undefined;

/**
 * @member {Array.<module:model/GetFromAccountTypeOptionsResponseStandingInstructionSwagger>} fromAccountTypeOptions
 */
GetStandingInstructionsTemplateResponse.prototype['fromAccountTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetToOfficeOptionsResponseStandingInstructionSwagger>} toOfficeOptions
 */
GetStandingInstructionsTemplateResponse.prototype['toOfficeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetToAccountTypeOptionsResponseStandingInstructionSwagger>} toAccountTypeOptions
 */
GetStandingInstructionsTemplateResponse.prototype['toAccountTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetTransferTypeOptionsResponseStandingInstructionSwagger>} transferTypeOptions
 */
GetStandingInstructionsTemplateResponse.prototype['transferTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetStatusOptionsResponseStandingInstructionSwagger>} statusOptions
 */
GetStandingInstructionsTemplateResponse.prototype['statusOptions'] = undefined;

/**
 * @member {Array.<module:model/GetInstructionTypeOptionsResponseStandingInstructionSwagger>} instructionTypeOptions
 */
GetStandingInstructionsTemplateResponse.prototype['instructionTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetPriorityOptionsResponseStandingInstructionSwagger>} priorityOptions
 */
GetStandingInstructionsTemplateResponse.prototype['priorityOptions'] = undefined;

/**
 * @member {Array.<module:model/GetRecurrenceTypeOptionsResponseStandingInstructionSwagger>} recurrenceTypeOptions
 */
GetStandingInstructionsTemplateResponse.prototype['recurrenceTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger>} recurrenceFrequencyOptions
 */
GetStandingInstructionsTemplateResponse.prototype['recurrenceFrequencyOptions'] = undefined;






export default GetStandingInstructionsTemplateResponse;

