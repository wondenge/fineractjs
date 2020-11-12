

import ApiClient from '../ApiClient';
import Survey from './Survey';

/**
 * The Component model module.
 * @module model/Component
 * @version 1.0
 */
class Component {
    /**
     * Constructs a new <code>Component</code>.
     * @alias module:model/Component
     */
    constructor() { 
        
        Component.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Component</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Component} obj Optional instance to populate.
     * @return {module:model/Component} The populated <code>Component</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Component();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('survey')) {
                obj['survey'] = Survey.constructFromObject(data['survey']);
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
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Component.prototype['id'] = undefined;

/**
 * @member {module:model/Survey} survey
 */
Component.prototype['survey'] = undefined;

/**
 * @member {String} key
 */
Component.prototype['key'] = undefined;

/**
 * @member {String} text
 */
Component.prototype['text'] = undefined;

/**
 * @member {String} description
 */
Component.prototype['description'] = undefined;

/**
 * @member {Number} sequenceNo
 */
Component.prototype['sequenceNo'] = undefined;

/**
 * @member {Boolean} new
 */
Component.prototype['new'] = undefined;






export default Component;

