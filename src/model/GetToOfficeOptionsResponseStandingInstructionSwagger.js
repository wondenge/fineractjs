

import ApiClient from '../ApiClient';

/**
 * The GetToOfficeOptionsResponseStandingInstructionSwagger model module.
 * @module model/GetToOfficeOptionsResponseStandingInstructionSwagger
 * @version 1.0
 */
class GetToOfficeOptionsResponseStandingInstructionSwagger {
    /**
     * Constructs a new <code>GetToOfficeOptionsResponseStandingInstructionSwagger</code>.
     * @alias module:model/GetToOfficeOptionsResponseStandingInstructionSwagger
     */
    constructor() { 
        
        GetToOfficeOptionsResponseStandingInstructionSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetToOfficeOptionsResponseStandingInstructionSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetToOfficeOptionsResponseStandingInstructionSwagger} obj Optional instance to populate.
     * @return {module:model/GetToOfficeOptionsResponseStandingInstructionSwagger} The populated <code>GetToOfficeOptionsResponseStandingInstructionSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetToOfficeOptionsResponseStandingInstructionSwagger();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('nameDecorated')) {
                obj['nameDecorated'] = ApiClient.convertToType(data['nameDecorated'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetToOfficeOptionsResponseStandingInstructionSwagger.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetToOfficeOptionsResponseStandingInstructionSwagger.prototype['name'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetToOfficeOptionsResponseStandingInstructionSwagger.prototype['nameDecorated'] = undefined;






export default GetToOfficeOptionsResponseStandingInstructionSwagger;

