

import ApiClient from '../ApiClient';

/**
 * The GetRecurrenceTypeOptionsResponseStandingInstructionSwagger model module.
 * @module model/GetRecurrenceTypeOptionsResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetRecurrenceTypeOptionsResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetRecurrenceTypeOptionsResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetRecurrenceTypeOptionsResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetRecurrenceTypeOptionsResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurrenceTypeOptionsResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurrenceTypeOptionsResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetRecurrenceTypeOptionsResponseStandingInstructionSwagger} The populated <code>GetRecurrenceTypeOptionsResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurrenceTypeOptionsResponseStandingInstructionSwagger();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurrenceTypeOptionsResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurrenceTypeOptionsResponseStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurrenceTypeOptionsResponseStandingInstructionSwagger.prototype['description'] = undefined;






export default GetRecurrenceTypeOptionsResponseStandingInstructionSwagger;

