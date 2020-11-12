

import ApiClient from '../ApiClient';

/**
 * The GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger model module.
 * @module model/GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger} The populated <code>GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger();

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
GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger.prototype['description'] = undefined;






export default GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger;

