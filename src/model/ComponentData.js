

import ApiClient from '../ApiClient';

/**
 * The ComponentData model module.
 * @module model/ComponentData
 * @version 1.0
 */
class ComponentData {
    /**
     * Constructs a new <code>ComponentData</code>.
     * @alias module:model/ComponentData
     */
    constructor() { 
        
        ComponentData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ComponentData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ComponentData} obj Optional instance to populate.
     * @return {module:model/ComponentData} The populated <code>ComponentData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComponentData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('sequenceNo')) {
                obj['sequenceNo'] = ApiClient.convertToType(data['sequenceNo'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ComponentData.prototype['id'] = undefined;

/**
 * @member {String} key
 */
ComponentData.prototype['key'] = undefined;

/**
 * @member {String} text
 */
ComponentData.prototype['text'] = undefined;

/**
 * @member {String} description
 */
ComponentData.prototype['description'] = undefined;

/**
 * @member {Number} sequenceNo
 */
ComponentData.prototype['sequenceNo'] = undefined;






export default ComponentData;

