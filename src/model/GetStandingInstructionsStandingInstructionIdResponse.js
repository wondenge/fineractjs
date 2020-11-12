

import ApiClient from '../ApiClient';
import GetFromAccountStandingInstructionSwagger from './GetFromAccountStandingInstructionSwagger';
import GetFromAccountTypeStandingInstructionSwagger from './GetFromAccountTypeStandingInstructionSwagger';
import GetFromClientStandingInstructionSwagger from './GetFromClientStandingInstructionSwagger';
import GetFromOfficeStandingInstructionSwagger from './GetFromOfficeStandingInstructionSwagger';
import GetInstructionTypeStandingInstructionSwagger from './GetInstructionTypeStandingInstructionSwagger';
import GetPriorityStandingInstructionSwagger from './GetPriorityStandingInstructionSwagger';
import GetRecurrenceFrequencyStandingInstructionSwagger from './GetRecurrenceFrequencyStandingInstructionSwagger';
import GetRecurrenceTypeStandingInstructionSwagger from './GetRecurrenceTypeStandingInstructionSwagger';
import GetStatusStandingInstructionSwagger from './GetStatusStandingInstructionSwagger';
import GetToAccountStandingInstructionSwagger from './GetToAccountStandingInstructionSwagger';
import GetToAccountTypeStandingInstructionSwagger from './GetToAccountTypeStandingInstructionSwagger';
import GetToClientStandingInstructionSwagger from './GetToClientStandingInstructionSwagger';
import GetToOfficeStandingInstructionSwagger from './GetToOfficeStandingInstructionSwagger';
import GetTransferTypeStandingInstructionSwagger from './GetTransferTypeStandingInstructionSwagger';

/**
 * The GetStandingInstructionsStandingInstructionIdResponse model module.
 * @module model/GetStandingInstructionsStandingInstructionIdResponse
 * @version 1.0
 */
class GetStandingInstructionsStandingInstructionIdResponse {
    /**
     * Constructs a new <code>GetStandingInstructionsStandingInstructionIdResponse</code>.
     * GetStandingInstructionsStandingInstructionIdResponse
     * @alias module:model/GetStandingInstructionsStandingInstructionIdResponse
     */
    constructor() { 
        
        GetStandingInstructionsStandingInstructionIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStandingInstructionsStandingInstructionIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStandingInstructionsStandingInstructionIdResponse} obj Optional instance to populate.
     * @return {module:model/GetStandingInstructionsStandingInstructionIdResponse} The populated <code>GetStandingInstructionsStandingInstructionIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStandingInstructionsStandingInstructionIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountDetailId')) {
                obj['accountDetailId'] = ApiClient.convertToType(data['accountDetailId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('fromOffice')) {
                obj['fromOffice'] = GetFromOfficeStandingInstructionSwagger.constructFromObject(data['fromOffice']);
            }
            if (data.hasOwnProperty('fromClient')) {
                obj['fromClient'] = GetFromClientStandingInstructionSwagger.constructFromObject(data['fromClient']);
            }
            if (data.hasOwnProperty('fromAccountType')) {
                obj['fromAccountType'] = GetFromAccountTypeStandingInstructionSwagger.constructFromObject(data['fromAccountType']);
            }
            if (data.hasOwnProperty('fromAccount')) {
                obj['fromAccount'] = GetFromAccountStandingInstructionSwagger.constructFromObject(data['fromAccount']);
            }
            if (data.hasOwnProperty('toOffice')) {
                obj['toOffice'] = GetToOfficeStandingInstructionSwagger.constructFromObject(data['toOffice']);
            }
            if (data.hasOwnProperty('toClient')) {
                obj['toClient'] = GetToClientStandingInstructionSwagger.constructFromObject(data['toClient']);
            }
            if (data.hasOwnProperty('toAccountType')) {
                obj['toAccountType'] = GetToAccountTypeStandingInstructionSwagger.constructFromObject(data['toAccountType']);
            }
            if (data.hasOwnProperty('toAccount')) {
                obj['toAccount'] = GetToAccountStandingInstructionSwagger.constructFromObject(data['toAccount']);
            }
            if (data.hasOwnProperty('transferType')) {
                obj['transferType'] = GetTransferTypeStandingInstructionSwagger.constructFromObject(data['transferType']);
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = GetPriorityStandingInstructionSwagger.constructFromObject(data['priority']);
            }
            if (data.hasOwnProperty('instructionType')) {
                obj['instructionType'] = GetInstructionTypeStandingInstructionSwagger.constructFromObject(data['instructionType']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetStatusStandingInstructionSwagger.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('validFrom')) {
                obj['validFrom'] = ApiClient.convertToType(data['validFrom'], 'Date');
            }
            if (data.hasOwnProperty('recurrenceType')) {
                obj['recurrenceType'] = GetRecurrenceTypeStandingInstructionSwagger.constructFromObject(data['recurrenceType']);
            }
            if (data.hasOwnProperty('recurrenceFrequency')) {
                obj['recurrenceFrequency'] = GetRecurrenceFrequencyStandingInstructionSwagger.constructFromObject(data['recurrenceFrequency']);
            }
            if (data.hasOwnProperty('recurrenceInterval')) {
                obj['recurrenceInterval'] = ApiClient.convertToType(data['recurrenceInterval'], 'Number');
            }
            if (data.hasOwnProperty('recurrenceOnMonthDay')) {
                obj['recurrenceOnMonthDay'] = ApiClient.convertToType(data['recurrenceOnMonthDay'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} accountDetailId
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['accountDetailId'] = undefined;

/**
 * @member {String} name
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['name'] = undefined;

/**
 * @member {module:model/GetFromOfficeStandingInstructionSwagger} fromOffice
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['fromOffice'] = undefined;

/**
 * @member {module:model/GetFromClientStandingInstructionSwagger} fromClient
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['fromClient'] = undefined;

/**
 * @member {module:model/GetFromAccountTypeStandingInstructionSwagger} fromAccountType
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['fromAccountType'] = undefined;

/**
 * @member {module:model/GetFromAccountStandingInstructionSwagger} fromAccount
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['fromAccount'] = undefined;

/**
 * @member {module:model/GetToOfficeStandingInstructionSwagger} toOffice
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['toOffice'] = undefined;

/**
 * @member {module:model/GetToClientStandingInstructionSwagger} toClient
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['toClient'] = undefined;

/**
 * @member {module:model/GetToAccountTypeStandingInstructionSwagger} toAccountType
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['toAccountType'] = undefined;

/**
 * @member {module:model/GetToAccountStandingInstructionSwagger} toAccount
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['toAccount'] = undefined;

/**
 * @member {module:model/GetTransferTypeStandingInstructionSwagger} transferType
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['transferType'] = undefined;

/**
 * @member {module:model/GetPriorityStandingInstructionSwagger} priority
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['priority'] = undefined;

/**
 * @member {module:model/GetInstructionTypeStandingInstructionSwagger} instructionType
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['instructionType'] = undefined;

/**
 * @member {module:model/GetStatusStandingInstructionSwagger} status
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['status'] = undefined;

/**
 * @member {Number} amount
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['amount'] = undefined;

/**
 * @member {Date} validFrom
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['validFrom'] = undefined;

/**
 * @member {module:model/GetRecurrenceTypeStandingInstructionSwagger} recurrenceType
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['recurrenceType'] = undefined;

/**
 * @member {module:model/GetRecurrenceFrequencyStandingInstructionSwagger} recurrenceFrequency
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['recurrenceFrequency'] = undefined;

/**
 * @member {Number} recurrenceInterval
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['recurrenceInterval'] = undefined;

/**
 * @member {Date} recurrenceOnMonthDay
 */
GetStandingInstructionsStandingInstructionIdResponse.prototype['recurrenceOnMonthDay'] = undefined;






export default GetStandingInstructionsStandingInstructionIdResponse;

