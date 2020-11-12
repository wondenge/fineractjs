

import ApiClient from '../ApiClient';

/**
 * The IdDocument model module.
 * @module model/IdDocument
 * @version 1.0
 */
class IdDocument {
    /**
     * Constructs a new <code>IdDocument</code>.
     * @alias module:model/IdDocument
     */
    constructor() { 
        
        IdDocument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdDocument} obj Optional instance to populate.
     * @return {module:model/IdDocument} The populated <code>IdDocument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdDocument();

            if (data.hasOwnProperty('idType')) {
                obj['idType'] = ApiClient.convertToType(data['idType'], 'String');
            }
            if (data.hasOwnProperty('idNumber')) {
                obj['idNumber'] = ApiClient.convertToType(data['idNumber'], 'String');
            }
            if (data.hasOwnProperty('issuerCountry')) {
                obj['issuerCountry'] = ApiClient.convertToType(data['issuerCountry'], 'String');
            }
            if (data.hasOwnProperty('otherIdDescription')) {
                obj['otherIdDescription'] = ApiClient.convertToType(data['otherIdDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} idType
 */
IdDocument.prototype['idType'] = undefined;

/**
 * @member {String} idNumber
 */
IdDocument.prototype['idNumber'] = undefined;

/**
 * @member {String} issuerCountry
 */
IdDocument.prototype['issuerCountry'] = undefined;

/**
 * @member {String} otherIdDescription
 */
IdDocument.prototype['otherIdDescription'] = undefined;






export default IdDocument;

